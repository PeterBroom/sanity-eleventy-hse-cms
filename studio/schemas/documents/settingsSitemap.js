import {sitemapNav} from '../objects/navigation/sitemap/sitemapNav.js'

export default {
  name: 'settingsSitemap',
  type: 'document',
  title: 'Sitemap',
  fields: [
    {
      name: 'sitemapSection',
      title: 'Sitemap section',
      type: 'array',
      of: [
        {
          type: 'sitemapNav',
          name: 'sitemapNav'
        }
      ],
      inputComponent: sitemapNav
    }
  ],
  preview: {
    prepare ({title = 'Sitemap'}) {
      return {
        title
      }
    }
  }
}
