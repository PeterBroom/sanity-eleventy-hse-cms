const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateSection (section) {
  return {
    ...section,
    bodyCopy: BlocksToMarkdown(section.bodyCopy, { serializers, ...client.config() })
  }
}

async function getSections () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "section" && defined(slug) && _updatedAt < now()]`
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
      _type == "cards" => {
        cardItems[]{
          ...,
          "slug": @.target->slug
        }
      }
    }
  }`
  const order = `| order(_updatedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareSections = reducedDocs.map(generateSection)
  return prepareSections
}

module.exports = getSections
