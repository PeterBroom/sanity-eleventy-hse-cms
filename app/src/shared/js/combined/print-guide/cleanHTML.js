import cleaner from 'clean-html';

export const cleanHTML = (data) => {
  let cleanHTML;

  const options = {
    'remove-comments': true,
    'replace-nbsp': true,
    'break-around-tags': [
      'body',
      'blockquote',
      'br',
      'div',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'hr',
      'link',
      'meta',
      'p',
      'table',
      'title',
      'td',
      'tr',
    ],
  };

  cleaner.clean(data, options, function (html) {
    cleanHTML = html;
  });

  return cleanHTML;
};
