export default {
  name: 'sitemapNav.section',
  type: 'object',
  title: 'Section',
  fields: [
    {
      type: 'reference',
      name: 'target',
      title: 'Target page',
      to: [{type: 'home'}, {type: 'section'}, {type: 'homepage'}, {type: 'page'}]
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title'
    },
    {
      type: 'array',
      name: 'links',
      title: 'Links',
      of: [{type: 'sitemapNav.link'}]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  },
}
