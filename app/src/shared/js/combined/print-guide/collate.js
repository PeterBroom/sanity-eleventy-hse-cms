import { omit } from './omit.js';
import { generatePDF } from './generate-pdf.js';
import { getBase64ImageFromURL } from '../utils/base64image-from-url';

export function collate(data, identifier, action) {
    if (!data) {
        return;
    }

    const convertVideo = async (data) => {
      const video = data.querySelectorAll('.video__container');
      [...video].forEach((item) => {
        const source = item.querySelector('iframe').src.split("/").pop();
        const url = `https://www.youtube.com/watch?v=${source}`
        const title = item.querySelector('h2').textContent;
        const newElem = document.createElement('p');
        const link = document.createElement('a');
        link.href = url;
        link.textContent = `Watch the '${title}' video`;
        newElem.appendChild(link);

        item.parentNode.replaceChild(newElem, item);
      });
      return data;
    }

    const insertPageBreaks = async (data) => {
      const htmlObject = document.createElement('div');
      htmlObject.innerHTML = data;
      const headings = htmlObject.querySelectorAll('h1');
      [...headings].forEach((heading, index) => {
        if (index != 0) {
          heading.classList.add('pdf-pagebreak-before');
        }
      });

      return htmlObject;
    }

    const convertImages = async (data) => {
      const images = data.querySelectorAll('img');

      const b64Arry = await Promise.all(
        [...images].map((image) => getBase64ImageFromURL(image.src)))
        .then((converted) => {
          return converted;
        })
        .catch((error) => {
          console.error(error);
        });

        // replace images
        [...images].forEach((item, index) => {
          const imgsrc = item.getAttributeNode('src');
          imgsrc.nodeValue = b64Arry[index];
        });

        return data;
    }

    // retrieve pages
    const getPages = async (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'document';

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                  const html =
                    xhr.responseXML.getElementById('contentContainer');
                  // const parser = new DOMParser();
                  // const parsedHtml = parser.parseFromString(
                  //   html.innerHTML,
                  //   'text/html'
                  // );

                  // remove non-required ids
                  [...omit].forEach((item) => {
                    const removeItem = html.querySelector(item);
                    if (removeItem) {
                      removeItem.parentNode.removeChild(removeItem);
                    }
                  });

                  resolve(html);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    };

    // collate pages
    const json = data;
    const collatePages = async () => {
      const response = await fetch(`/data/${json}`);
      const data = await response.json();

      const guide = data.filter((item) => item.printGuide[0].pageIdentifier === identifier);
      const pages = guide[0].printGuide[0].links;
      const metadata = guide[0].printGuide[0].metadata;

      await Promise.all(pages.map((page) => getPages(`/${page.slug}`)))
        .then((data) => {
          return data.map(function (page) {
              return page.innerHTML;
            }).join('');
        })
        .then((data) => {
          return insertPageBreaks(data);
        })
        .then((data) => {
          return convertVideo(data);
        })
        .then((data) => {
          return convertImages(data);
        })
        .then((data) => {
            const html = data.innerHTML;
            generatePDF(html, metadata, action);
        })
        .catch((error) => {
          console.error('Error: ', error);
        });
    };

    return collatePages();
}
