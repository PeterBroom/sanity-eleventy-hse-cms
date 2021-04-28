const BlocksToMarkdown = require('@sanity/block-content-to-markdown')

const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateSettings (settingsGlobals) {
  return {
    ...settingsGlobals,
    notificationBanner: BlocksToMarkdown(settingsGlobals.notificationBanner, { serializers, ...client.config() }),
  }
}

async function getSettings () {
  const filter = groq`*[_id == "settingsGlobals" && _createdAt < now()]`

  const projection = groq`{
    ...,
    _createdAt,
    "notificationBanner": content[]{
      ...,
      message[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "slug": @.reference->slug
          }
        }
      }
    }
  }`
  const query = [filter, projection].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareSettings = reducedDocs.map(generateSettings)
  return prepareSettings
}

module.exports = getSettings
