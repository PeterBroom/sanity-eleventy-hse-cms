const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateHome (home) {
  return {
    ...home
  }
}

async function getHome () {
  const filter = groq`*[_type == "home" && _updatedAt < now()]`

  const projection = groq`{
    _id,
    _type,
    _updatedAt,
    slug,
    popular[]{
      ...,
      internalLink->{title, slug}
    },
    hero,
    metaDescription,
    metaKeywords,
    solutions,
    pageBuilder[]{
      ...,
      _type == "cards" => {
        furtherInfo {
          ...,
          internalLink->{title, slug}
        },
        cardItems[]{
          ...,
          "slug": @.target->slug,
          moreInfo {
            ...,
            title,
            internalLink->{title, slug}
          },
        }
      },
    }
  }`;
  const order = `| order(_updatedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareHome = reducedDocs.map(generateHome)
  prepareHome.forEach((item) => {
    const hero = item.hero;
    if (hero) {
      hero.editorInterface = BlocksToMarkdown(hero.editorInterface, { serializers, ...client.config() })
    }
  });
  return prepareHome
}

module.exports = getHome