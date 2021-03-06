const groq = require('groq')
const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateMenu (page) {
  return {
    ...page,
  }
}

async function navigationTree () {
  const filter = groq`*[_type == "page" && defined(slug) && _updatedAt < now()]`
  const projection = groq`{
      slug,
      title,
      shortTitle,
      subMenu[]{
        ...,
        sections[]{
          ...,
          target->{title, shortTitle, slug, _id},
          links[]{
            ...,
            target->{title, shortTitle, slug, _id},
            children[]{
              ...,
              target->{title, shortTitle, slug, _id}
            }
          }
        }
      }
  }`
  const order = `| order(updatedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareMenu = reducedDocs.map(generateMenu)
  return prepareMenu
}

module.exports = navigationTree
