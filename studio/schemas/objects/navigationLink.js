export default {
  name: 'navigation.link',
  type: 'object',
  title: 'Link',
  preview: {
    select: {
      title: 'title',
      targetTitle: 'target.title'
    },
    prepare: ({title, targetTitle}) => ({
      title: title || targetTitle
    })
  },
  fields: [
    {
      type: 'reference',
      name: 'target',
      title: 'Target page',
      to: [{type: 'page'}],
      description: 'No target article turns the item into a subheading.'
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Override title from the target page.'
    },
    {
      type: 'array',
      name: 'children',
      title: 'Children',
      of: [{type: 'navigation.link'}]
    }
  ]
}
