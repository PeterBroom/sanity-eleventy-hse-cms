const groq = require('groq')
const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateSitemap (page) {
  return {
    ...page
  }
}

async function getSitemap () {
  const filter = groq`*[_type in ["page", "homepage", "section"] && defined(slug) && _updatedAt < now()]`

  const projection = groq`{
    _id,
    _type,
    _updatedAt,
    title,
    navHighlight{
      ...,
      "slug": ^->slug,
      "title": ^->title,
    },
    belongsTo {
      ...,
      "slug": ^->slug,
      "title": ^->title,
      "shortTitle": ^->shortTitle
    },
    slug,
    breadcrumb[]{
      ...,
      "slug": ^->slug,
      "title": ^->title,
      "shortTitle": ^->shortTitle
    },
    "parentSlug": @.belongsTo->slug,
    metaDescription,
    metaKeywords,
  }`
  const order = `| order(_updatedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareSitemap = reducedDocs.map(generateSitemap)
  return prepareSitemap
}

module.exports = getSitemap