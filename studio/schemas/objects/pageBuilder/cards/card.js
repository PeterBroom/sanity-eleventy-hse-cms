import {IoGridOutline} from 'react-icons/io5'

export default {
  name: 'cards',
  title: 'Cards',
  type: 'object',
  icon: IoGridOutline,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'titleHidden',
      title: 'Hide title',
      type: 'boolean',
      description: 'Will hide the title but not for the visually impaired.'
    },
    {
      name: 'cardItems',
      title: 'Card Items',
      type: 'array',
      of: [{type: 'card.item'}]
    },
    {
      name: 'cardGrid',
      title: 'Card grid',
      type: 'gridLayout'
    },
    {
      name: 'grid',
      title: 'Container grid',
      type: 'gridLayout'
    },
    {
      name: 'backgroundColour',
      title: 'Background colour',
      type: 'backgroundColour'
    },
    {
      name: 'furtherInfo',
      type: 'object',
      title: 'Further information',
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
        to: [{type: 'section'}, {type: 'homepage'}, {type: 'page'}]
      },
      {
        type: 'string',
        name: 'tracking',
        title: 'Tracking code',
        description: 'Add tracking codes as a url string. Must start with a question mark.'
      }]
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'grid'
    },
    prepare (selection) {
      const {title, subtitle} = selection
      const last = subtitle.gridLast ? 'last' : '';
      const column = subtitle.columns ? subtitle.columns : '12';
      const gridPreview = `${column} ${last}`
      const previewTitle = title ? title : 'Cards';
      return {
        title: `${previewTitle}`,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}
