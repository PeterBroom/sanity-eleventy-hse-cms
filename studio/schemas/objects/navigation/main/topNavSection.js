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
      type: 'string',
      name: 'title',
      title: 'Title'
    },
  ]
}
