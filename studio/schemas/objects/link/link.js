export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Will default to title of page if left blank'
    },
    {
      name: 'internalLink',
      type: 'internalLink'
    },
    {
      name: 'externalLink',
      type: 'externalLink'
    },
    {
      name: 'analytics',
      type: 'analytics'
    }
  ],
  preview: {
    select: {
      title: 'title',
      linkTitle: 'internalLink.title'
    },
    prepare(selection) {
      const { title, linkTitle } = selection
      const contentPreview = title ? `${title}` : linkTitle
      return {
        title: contentPreview
      }
    }
  }
}