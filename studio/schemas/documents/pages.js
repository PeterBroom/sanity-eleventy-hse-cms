import ConditionalField from 'sanity-plugin-conditional-field'
import {AiOutlineFileText} from 'react-icons/ai'
import {navigation} from '../objects/navigation/sub/navigation.js'

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: AiOutlineFileText,
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
      title: 'Page title',
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
      fieldset: 'pageNavigation',
      to: [{type: 'section'}]
    },
    {
      name: 'belongsTo',
      title: 'Belongs to...',
      type: 'reference',
      description: 'The page this belongs to',
      fieldset: 'pageNavigation',
      to: [
        {
          type: 'homepage'
        },
        {
          type: 'page'
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug will form the url for this page',
      fieldset: 'pageNavigation',
      readOnly: false,
      options: {
        source: doc => doc.title,
        maxLength: 96,
        auto: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'breadcrumb',
      title: 'Breadcrumb',
      description: 'Create a heirachy tree.',
      fieldset: 'pageNavigation',
      type: 'array',
      of: [
        {
          name: 'target',
          type: 'reference',
          to: [{type: 'section'}, {type: 'homepage'}, {type: 'page'}]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      fieldset: 'pageContent',
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
        },
        {
          type: 'pagination'
        },
        {
          type: 'printGuide'
        }
      ],
      options: {
        editModal: 'fullscreen'
      }
    },
    {
      name: 'pageBuilderAsideInheritBoolean',
      type: 'boolean',
      title: 'Inherit aside',
      description: 'Inherit aside from parent page',
      fieldset: 'pageContent',
    },
    {
      name: 'pageBuilderAsideBoolean',
      type: 'boolean',
      title: 'Aside',
      description: 'Does this page require an aside?',
      fieldset: 'pageContent',
    },
    {
      name: 'pageBuilderAside',
      type: 'array',
      title: 'Aside',
      fieldset: 'pageContent',
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
        },
        {
          type: 'pagination'
        },
        {
          type: 'printGuide'
        }
      ],
      inputComponent: ConditionalField,
      options: {
        editModal: 'fullscreen',
        condition: document => document.pageBuilderAsideBoolean === true
      }
    },
    {
      name: 'subMenu',
      title: 'Sub menus',
      type: 'array',
      fieldset: 'pageNavigation',
      of: [
        {
          type: 'navigation',
          name: 'navigation'
        }
      ],
      inputComponent: navigation
    },
    {
      name: 'subMenuInherit',
      title: 'Inherit parent sub menu',
      type: 'boolean',
      fieldset: 'pageNavigation',
      inputComponent: navigation
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
