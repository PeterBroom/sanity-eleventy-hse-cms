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
  const filter = groq`*[_type == "section" && defined(slug) && _updatedAt < now()]`
  const projection = groq`{
      slug,
      section->{title, id},
      title,
      subMenu[]{
        sections[]{
          ...,
          target->{title, slug, _id},
          links[]{
            ...,
            target->{title, slug, _id},
            children[]{
              ...,
              target->{title, slug, _id}
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
