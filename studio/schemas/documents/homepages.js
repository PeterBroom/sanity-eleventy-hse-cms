import {AiOutlineHome} from 'react-icons/ai'

import {navigation} from '../objects/navigation/sub/navigation.js'
export default {
  title: 'Home pages',
  name: 'homepage',
  type: 'document',
  icon: AiOutlineHome,
  fields: [
    {
      name: 'breadcrumb',
      title: 'Breadcrumb',
      description: 'Create a heirachy tree.',
      type: 'array',
      of: [
        {
          name: 'target',
          type: 'reference',
          to: [
            {type: 'section'},
            {type: 'homepage'},
            {type: 'page'},
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Homepage title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'shortTitle',
      type: 'string',
      title: 'Short title',
      description: 'Used in navigation menus'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the section',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'belongsTo',
      title: 'Belongs to...',
      type: 'reference',
      description: 'The section this home page belongs to',
      to: [
        {
          type: 'section'
        }
      ],
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
          type: 'notificationBanner'
        },
        {
          type: 'cards'
        }
      ]
    },
    {
      name: 'subMenu',
      title: 'Sub menus',
      type: 'array',
      of: [
        {
          type: 'navigation',
          name: 'navigation'
        }
      ],
      inputComponent: navigation
    }
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title Ascending',
      by: [
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'titleDesc',
      title: 'Title descending',
      by: [
        {
          field: 'title',
          direction: 'desc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      slug: 'slug'
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  }
}
