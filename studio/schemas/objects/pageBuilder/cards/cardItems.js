import {BsCardHeading} from 'react-icons/bs'

export default {
  title: 'Item',
  name: 'card.item',
  type: 'object',
  icon: BsCardHeading,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'copy',
      type: 'string',
      title: 'Copy'
    },
    {
      name: 'moreInfo',
      type: 'object',
      title: 'More information',
      fields: [{
        name: 'title',
        type: 'string',
        title: 'Link text',
        description: 'To use page title leave this field blank.'
      },
      {
        type: 'reference',
        name: 'target',
        title: 'Target page',
        to: [{type: 'page'}]
      },
      {
        type: 'string',
        name: 'tracking',
        title: 'Tracking code',
        description: 'Add tracking codes as a url string. Must start with a question mark.'
      }]
    }
  ]
}
