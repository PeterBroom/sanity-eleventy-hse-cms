export default {
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'accordionArray',
      type: 'array',
      title: 'Items',
      of: [{type: 'accordionItem'}]
    }
  ]
}
