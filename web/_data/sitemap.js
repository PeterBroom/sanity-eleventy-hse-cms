const groq = require('groq')
const client = require('../utils/sanityClient')
module.exports = async function() {
  const sitemap = await client.fetch(`
    *[_id == "settingsSitemap"]{
        ...,
        sitemapSection[]{
            ...,
            seeMore{
                text,
                "slug": @.link->slug
            },
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
        }
    `);

    return sitemap;
}
