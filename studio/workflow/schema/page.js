export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {type: 'string', name: 'title', title: 'Title'},
    {type: 'datetime', name: 'publishedAt', title: 'Published at'},
    {type: 'image', name: 'image', title: 'Image'}
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt'
    }
  }
}
