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
    pageTitleAccronym,
    accronymReplace,
    accronymFind,
    slug,
    "navHighlight": navHighlight->{title, slug},
    "belongsTo": belongsTo->{title, shortTitle, slug},
    "breadcrumb": breadcrumb[]->{title, shortTitle, slug},
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
      },
      _type == "bodyCopy" => {
          ...,
          "slug": @.moreInfo.target->slug
      },
      _type == "linkBlock" => {
        links[]{
          ...,
          "slug": ^->slug,
          "title": ^->title,
        },
        more {
          ...,
          "slug": @.moreRef->slug
        }
      }
    }
  }`;
  const order = `| order(_updatedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePages = reducedDocs.map(generatePage)

  preparePages.forEach((item)=>{
    const pageBuilder = item.pageBuilder;
    if (pageBuilder) {
      pageBuilder.forEach((component)=> {
        if (component._type === "bodyCopy") {
          component.editorInterface = BlocksToMarkdown(component.editorInterface, { serializers, ...client.config() })
        }
        if (component._type === "formBuilder") {
          component.introductoryText = BlocksToMarkdown(component.introductoryText, { serializers, ...client.config() })
        }
      });
    }
  })
  return preparePages
}

module.exports = getPages

