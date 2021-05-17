export default {
  name: 'navigation',
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
      of: [{type: 'navigation.section'}]
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
