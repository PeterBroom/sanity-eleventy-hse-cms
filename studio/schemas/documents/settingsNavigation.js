import {topNav} from '../objects/navigation/main/topNav.js'
export default {
  title: 'Navigation',
  name: 'settingsNavigation',
  type: 'document',
  fields: [
    {
      name: 'headerMenu',
      title: 'Header navigation menu',
      type: 'object',
      fields: [
        {
          type: 'array',
          name: 'sections',
          title: 'Items',
          of: [{type: 'topNav.section'}]
        }
      ],
    },
    {
      name: 'footerMenu',
      title: 'Footer navigation menu',
      type: 'object',
      fields: [
        {
          type: 'array',
          name: 'sections',
          title: 'Items',
          of: [{type: 'topNav.section'}]
        }
      ],
    }
  ],
  preview: {
    prepare ({title = 'Navigation'}) {
      return {
        title
      }
    }
  }
}
