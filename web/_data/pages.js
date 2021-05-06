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
  const filter = groq`*[_type == "page" && defined(slug) && _updatedAt < now()]`

  const projection = groq`{
    _id,
    _type,
    _updatedAt,
    title,
    shortTitle,
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
  const preparePages = reducedDocs.map(generatePage)
  console.log('--- Pages ---------------------');
  console.log('preparePages',preparePages);
  console.log('-------------------------------');

  preparePages.forEach((item)=>{
    const pageBuilder = item.pageBuilder;
    if (pageBuilder) {
      pageBuilder.forEach((component)=> {
        if (component._type === "bodyCopy") {
          component.editorInterface = BlocksToMarkdown(component.editorInterface, { serializers, ...client.config() })
        }
      });
    }
  })
  return preparePages
}

module.exports = getPages