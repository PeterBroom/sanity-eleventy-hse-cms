export default {
  name: 'sitemapNav',
  type: 'document',
  title: 'Navigation',
  fields: [
    {
      name: 'identifier',
      type: 'slug',
      hidden: false,
      title: 'Identifier',
      options: {
        source: (options, doc) => options.slug.current,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '/')
      }
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title'
    },
    {
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of: [{type: 'sitemapNav.section'}]
    },
    {
      name: 'seeMore',
      title: 'See more',
      type: 'object',
      fields: [
        {
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: [{type: 'section'}, {type: 'homepage'}, {type: 'page'}]
        },
        {
          name: 'text',
          title: 'Text',
          type: 'string'
        }
      ]
    },
    {
      name: 'listType',
      title: 'List type',
      type: 'string',
      description: 'Display as ordred or unordered.',
      options: {
      list: [
          { title: 'Unordered list', value: 'ul'},
          { title: 'Ordered list', value: 'ol'}
          ]
      }
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
  }
}
