export default {
  name: 'cards',
  title: 'Cards',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'string',
      options: {
        list: [
          { title: '1 column', value: '1'},
          { title: '2 column', value: '2'},
          { title: '3 column', value: '3'},
          { title: '4 column', value: '4'},
          { title: '5 column', value: '5'},
          { title: '6 column', value: '6'},
        ]
      }
    },
    {
      name: 'cardItems',
      title: 'Card Items',
      type: 'array',
      of: [{type: 'card.item'}]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title = 'Cards'}) {
      return {
        title
      }
    }
  }
}
