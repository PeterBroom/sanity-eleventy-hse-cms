export default {
  name: 'navigation.section',
  type: 'object',
  title: 'Section',
  fields: [
    {
      type: 'reference',
      name: 'target',
      title: 'Target page',
      to: [{type: 'page'}]
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
      of: [{type: 'navigation.link'}]
    }
  ],
  preview: {
    select: {
      title: 'navigation.title'
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  },
}
