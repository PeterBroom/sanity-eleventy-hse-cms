/*
 * Only fetches structures 2 levels down.
 * You can extend it by repeating the pattern inside this query
 */
// const client = require('../utils/sanityClient.js')
// const navigationTree = client.fetch(`//groq
//        *[_id == 'sunMenu'][0] {
//         ...,
//         sections[]{
//           ...,
//           target->{title, slug, _id},
//           links[]{
//             ...,
//             target->{title, slug, _id},
//             children[]{
//               ...,
//               target->{title, slug, _id}
//             }
//           }
//         }
//       }
//       `)

// module.exports = navigationTree
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
  const filter = groq`*[_type == "section" && defined(slug) && publishedAt < now()]`
  // const filter = groq`*[_id == 'mainNavigation']`
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
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareMenu = reducedDocs.map(generateMenu)
  return prepareMenu
}

module.exports = navigationTree
