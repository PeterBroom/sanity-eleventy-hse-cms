export default function resolveProductionUrl(document) {
  return `https://sanity-eleventy-hse-cms-studio.netlify.app/${document.slug.current}`
}