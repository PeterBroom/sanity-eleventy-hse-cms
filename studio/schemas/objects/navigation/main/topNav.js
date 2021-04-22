export default {
  name: 'topNav',
  type: 'document',
  title: 'Top Navigation',
  fields: [
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
      of: [{type: 'topNav.section'}]
    }
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
