const elasticlunr = require('elasticlunr');
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateSearch (page) {
  return {
    ...page
  }
}

async function getSearch () {
  const filter = groq`*[_type in ["page", "section"] && defined(slug)]`
  const projection = groq`{
    _id,
    title,
    slug,
    metaDescription,
    metaKeywords
  }`
  const query = [filter, projection].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareSearches = reducedDocs.map(generateSearch)

  const index = elasticlunr(function () {
    this.addField('id');
    this.addField('title');
    this.addField('description');
    this.addField('keywords');
    this.addField('urlPath');
  });

  prepareSearches.forEach(function(page) {
    index.addDoc({
      id: page.slug.current,
      title: page.title,
      description: page.metaDescription,
      keywords: page.metaKeywords,
      urlPath: 'www.hse.gov.uk/' + page.slug.current
    });

  });
  return index.toJSON();
}
module.exports = getSearch
