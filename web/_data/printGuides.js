const groq = require('groq')
const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateGuide (page) {
  return {
    ...page
  }
}

async function getGuides () {
  const filter = groq`*[_type == "page" && 'printGuide' in pageBuilder[]._type && defined(slug) && _updatedAt < now()]`
  const projection = groq`{
    title,
    'printGuide': pageBuilder[_type match 'printGuide']{
        'pageIdentifier': pageIdentifier->_id,
        metadata,
        links[]-> {
          "slug": slug.current
        },
    }
  }`
  const query = [filter, projection].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareGuides = reducedDocs.map(generateGuide)
  console.log('prepareGuides', prepareGuides)
  return prepareGuides;
}

module.exports = getGuides
