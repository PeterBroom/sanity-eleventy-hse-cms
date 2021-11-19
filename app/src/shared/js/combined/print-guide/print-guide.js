import { collate } from './collate.js';

export function printGuide() {
  const CTAPrintGuide = document.querySelector('.print-guide');
  const CTADownloadGuide = document.querySelector('.download-guide');
  const json = CTAPrintGuide.parentNode.dataset.printGuide;
  const identifier = CTAPrintGuide.parentNode.dataset.identifier;

  // events
  if (CTAPrintGuide) {
    CTAPrintGuide.addEventListener('click', (e) => {
      e.preventDefault();
      collate(json, identifier, 'print');
    });
  }

  if (CTADownloadGuide) {
    CTADownloadGuide.addEventListener('click', (e) => {
      e.preventDefault();
      collate(json, identifier, 'download');
    });
  }
}
