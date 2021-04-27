const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generatePage (page) {
  return {
    ...page,
    bodyCopy: BlocksToMarkdown(page.bodyCopy, { serializers, ...client.config() })
  }
}

async function getPages () {
  const filter = groq`*[_type == "page" && defined(slug) && _updatedAt < now()]`

  const projection = groq`{
    _id,
    _updatedAt,
    title,
    parentSlug,
    slug,
    metaDescription,
    metaKeywords,
    "bodyCopy": pageBuilder[]{
      ...,
      editorInterface[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "slug": @.reference->slug
          }
        }
      }
    },
    pageBuilder[]{
      ...,
    }
  }`
  const order = `| order(_updatedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePages = reducedDocs.map(generatePage)
  // console.log(preparePages)
  return preparePages
}

module.exports = getPages
