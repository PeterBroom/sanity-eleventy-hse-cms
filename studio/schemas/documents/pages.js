export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'belongsTo',
      title: 'Belongs to...',
      type: 'reference',
      to: [{
        type: 'section'
      }]
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the page'
      // options: {
      //   source: doc => `${doc.belongsTo.slug.current}/${doc.title}`
      // }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at'
      // readOnly: true
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        {
          type: 'hero'
        },
        {
          type: 'bodyCopy'
        },
        {
          type: 'cards'
        },
        {
          type: 'form'
        }
      ]
    },
    {
      name: 'metaDescription',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'metaKeywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  }
}
