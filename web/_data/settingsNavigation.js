const groq = require('groq')
const client = require('../utils/sanityClient')
module.exports = async function() {
  const navigation = await client.fetch(`
        *[_id == "settingsNavigation"]{
          ...,
          // headerMenu[]{
          //   ...,
          //   sections[]{
          //     _type == "topNav.section" => {
          //       "slug": @.reference->slug
          //     }
          //   }
          // }
          'headerMenu': sections[] {
            'postLink': topNav.section->slug.current,
          }
        }
    `);

    return navigation;
}
