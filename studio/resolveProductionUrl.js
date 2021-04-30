export default function resolveProductionUrl(document) {
  return `http://localhost:8080/${document.slug.current}`
}