export default {
  name: 'card.item',
  type: 'object',
  title: 'Item',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'copy',
      type: 'string',
      title: 'Copy'
    },
    {
      type: 'reference',
      name: 'target',
      title: 'Target page',
      to: [{type: 'page'}]
    }
  ]
}
