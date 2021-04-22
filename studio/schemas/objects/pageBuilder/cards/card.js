export default {
  name: 'cards',
  title: 'Cards',
  type: 'object',
  fields: [{
    name: 'cardItems',
    title: 'Card Items',
    type: 'array',
    of: [{type: 'card.item'}]
  }],
  preview: {
    prepare ({title = 'Cards'}) {
      return {
        title
      }
    }
  }
}
