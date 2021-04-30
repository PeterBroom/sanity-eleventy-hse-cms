export default function resolveProductionUrl(document) {
  return `https://sanity-eleventy-hse-cms.netlify.app/${document.slug.current}`
}