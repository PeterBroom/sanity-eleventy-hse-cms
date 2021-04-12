const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generatePage (page) {
  return {
    ...page
  }
}

async function getPages () {
  // const filter = groq`*[_type == "page" && defined(slug) && publishedAt < now()]{
  //   ...,
  //   "publishingStatus": *[_type == "workflow.metadata" && documentId == ^._id]
  // }`
  const filter = groq`*[_type == "page" && defined(slug) && _updatedAt < now()]{
    ...,
    "parentSlug": belongsTo->{"slug": slug.current}
  }`

  const projection = groq`{
    _id,
    _updatedAt,
    title,
    parentSlug,
    slug,
    metaDescription,
    metaKeywords,
    pageBuilder[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug
        }
      }
    }
  }`
  const order = `| order(_updatedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePages = reducedDocs.map(generatePage)
  console.log(preparePages)
  return preparePages
}

module.exports = getPages
