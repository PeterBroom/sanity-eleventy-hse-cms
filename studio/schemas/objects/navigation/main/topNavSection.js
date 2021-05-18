export default {
  name: 'topNav.section',
  type: 'object',
  title: 'Section',
  fields: [
    {
      type: 'reference',
      name: 'target',
      title: 'Target page',
      to: [
        {type: 'section'}
      ]
    },
    {
      name: 'externalLink',
      title: 'External link',
      type: 'string',
      description: 'Is this link to an external site?'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
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
