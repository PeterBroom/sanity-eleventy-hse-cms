import {AiOutlineFileText} from 'react-icons/ai'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: AiOutlineFileText,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'belongsTo',
      title: 'Belongs to...',
      type: 'reference',
      description: 'The parent page this belongs to',
      to: [
        {
          type: 'homepage'
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug will form the url for this page',
      readOnly: true,
      options: {
        source: (doc) => doc.title,
        maxLength: 96,
        auto: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      description: 'Add components to your page to build up your content',
      of: [
        {
          type: 'bodyCopy'
        },
        {
          type: 'cards'
        },
        {
          type: 'accordion'
        },
        {
          type: 'chart'
        },
        {
          type: 'youtube'
        }
      ],
      options: {
        editModal: 'fullscreen'
      }
    },
    {
      name: 'metaDescription',
      title: 'Description',
      type: 'text',
      description: 'Descriptions are important for searches. Please enter a description for this pages content between 50 and 250 characters.',
      validation: Rule => Rule.required().min(50).max(250).warning('Longer descriptions are usually better')
    },
    {
      name: 'metaKeywords',
      title: 'Keywords',
      type: 'object',
      description: 'Keywords are important for searches.',
      fields: [
        {
          name: 'metaKeywordsArray',
          title: 'Enter words or phrases',
          description: 'Hit enter after each entry. ',
          validation: Rule => Rule.required().min(3),
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags'
          }
        }
      ]
      // validation: Rule => Rule.required()
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'updatedAt',
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
          field: 'updatedAt',
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
      subtitle: 'updatedAt',
      slug: 'slug'
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  }
}
