const groq = require('groq')
const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateRelatedMedia (page) {
  return {
    ...page,
  }
}

async function relatedMedia () {
  const filter = groq`*[_type == "page" && _updatedAt < now()]`
  const projection = groq`{
      "content": pageBuilder[]{
        _type == "youtube" => {
            title,
            url,
            tags
          }
        }
      }`
  const order = `| order(updatedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareRelatedMedia = reducedDocs.map(generateRelatedMedia)
  // console.log(prepareRelatedMedia) 
  return prepareRelatedMedia
}

module.exports = relatedMedia
