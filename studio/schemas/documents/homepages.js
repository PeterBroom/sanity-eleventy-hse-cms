import ConditionalField from 'sanity-plugin-conditional-field'
import {AiOutlineHome} from 'react-icons/ai'
import {navigation} from '../objects/navigation/sub/navigation.js'

export default {
  title: 'Home pages',
  name: 'homepage',
  type: 'document',
  icon: AiOutlineHome,
  fieldsets: [
    {name: 'pageTitle', title: 'Page title'},
    {name: 'pageNavigation', title: 'Page navigation'},
    {name: 'pageContent', title: 'Page content'},
    {name: 'pageMeta', title: 'Meta data'}
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Homepage title',
      description: 'Titles should be catchy, descriptive, and not too long',
      fieldset: 'pageTitle'
    },
    {
      name: 'shortTitle',
      type: 'string',
      title: 'Short title',
      description: 'Used in navigation menus and breadcrumb',
      fieldset: 'pageTitle'
    },
    {
      name: 'pageTitleAccronym',
      title: 'Does this page title contain an accronym?',
      type: 'boolean',
      description: 'Will tag abbreviations in the page title with a full title on hover',
      fieldset: 'pageTitle'
    },
    {
      name: 'accronymFind',
      type: 'string',
      title: 'Accronym',
      description: 'Accronym to target',
      fieldset: 'pageTitle',
      inputComponent: ConditionalField,
      options: {
        condition: document => document.pageTitleAccronym === true
      }
    },
    {
      name: 'accronymReplace',
      type: 'string',
      title: 'Accronym full title',
      description: 'Full title to display for accronym',
      fieldset: 'pageTitle',
      inputComponent: ConditionalField,
      options: {
        condition: document => document.pageTitleAccronym === true
      }
    },
    {
      name: 'navHighlight',
      title: 'Navigation highlight',
      type: 'reference',
      description: 'This will highlight the nav in the header for a section',
      to: [{type: 'section'}],
      fieldset: 'pageNavigation'
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
      validation: Rule => Rule.required(),
      fieldset: 'pageNavigation'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the section',
      options: {
        source: 'title',
        maxLength: 96
      },
      fieldset: 'pageNavigation'
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
          to: [{type: 'section'}, {type: 'homepage'}, {type: 'page'}]
        }
      ],
      validation: Rule => Rule.required(),
      fieldset: 'pageNavigation'
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
      inputComponent: navigation,
      fieldset: 'pageNavigation'
    },
    {
      name: 'subMenuInherit',
      title: 'Inherit parent sub menu',
      type: 'boolean',
      fieldset: 'pageNavigation',
      inputComponent: navigation
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      description: 'Add components to your page to build up your content',
      of: [
        {
          type: 'accordion'
        },
        {
          type: 'bodyCopy'
        },
        {
          type: 'cards'
        },
        {
          type: 'chart'
        },
        {
          type: 'divider'
        },
        {
          type: 'formBuilder'
        },
        {
          type: 'linkBlock'
        },
        {
          type: 'notificationBanner'
        },
        {
          type: 'subscribe'
        },
        {
          type: 'tabs'
        },
        {
          type: 'youtube'
        }
      ],
      fieldset: 'pageContent'
    },
    {
      name: 'metaDescription',
      title: 'Description',
      type: 'text',
      description:
        'Descriptions are important for page searches and search engines. Please enter a description for this pages content between 50 and 250 characters.',
      fieldset: 'pageMeta',
      validation: Rule =>
        Rule.required()
          .min(50)
          .max(250)
          .warning('Longer descriptions are usually better')
    },
    {
      name: 'metaKeywords',
      title: 'Keywords',
      description: 'Keywords are important for page searches and search engines.',
      fieldset: 'pageMeta',
      validation: Rule => Rule.required().min(3),
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
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
