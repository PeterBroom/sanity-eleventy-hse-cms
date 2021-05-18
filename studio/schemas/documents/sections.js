import { AiOutlineLayout } from 'react-icons/ai'

import {navigation} from '../objects/navigation/sub/navigation.js'

export default {
  title: 'Sections',
  name: 'section',
  type: 'document',
  icon: AiOutlineLayout,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
        },
        {
          type: 'divider'
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
    },
    {
      name: 'navHighlight',
      title: 'Navigation highlight',
      type: 'reference',
      description: 'This will highlight the nav in the header for a section',
      to: [{type: 'section'}]
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
