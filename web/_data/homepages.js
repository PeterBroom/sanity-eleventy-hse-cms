const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateHomepage (homepage) {
  return {
    ...homepage
  }
}

async function getHomepages () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "homepage" && defined(slug) && _updatedAt < now()]`
  const projection = groq`{
    _id,
    _type,
    _updatedAt,
    title,
    shortTitle,
    slug,
    navHighlight{
      ...,
      "slug": ^->slug,
      "title": ^->title,
    },
    breadcrumb[]{
      ...,
      "slug": ^->slug,
      "title": ^->title,
      "shortTitle": ^->shortTitle
    },
    "parentSlug": @.belongsTo->slug,
    metaDescription,
    metaKeywords,
    pageBuilder[]{
      ...,
      _type == "cards" => {
        furtherInfo {
          "slug": @.target->slug,
          "title": @.target->title,
        },
        cardItems[]{
          ...,
          "slug": @.target->slug,
          moreInfo {
            title,
            "slug": @.target->slug,
          },
        }
      }
    },
    "bodyCopy": pageBuilder[]{
      ...,
      _type == "bodyCopy" => {
        editorInterface[]{
          ...,
          markDefs[]{
            ...,
            _type == "internalLink" => {
              "slug": @.reference->slug
            }
          }
        }
      }
    }
  }`
  const order = `| order(_updatedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareHomepages = reducedDocs.map(generateHomepage)

  prepareHomepages.forEach((item)=>{
    const pageBuilder = item.pageBuilder;
    if (pageBuilder) {
      pageBuilder.forEach((component)=> {
        if (component._type === "bodyCopy") {
          component.editorInterface = BlocksToMarkdown(component.editorInterface, { serializers, ...client.config() })
        }
      });
    }
  })
  return prepareHomepages
}

module.exports = getHomepages
