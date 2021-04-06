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
        source: (doc, options) => options.parent.title
      }
    },
    {
      type: 'string',
      name: 'name',
      title: 'Name'
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
  ]
}
