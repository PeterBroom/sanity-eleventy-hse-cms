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
      name: 'linkFooter',
      type: 'boolean',
      title: 'Have link in card footer',
      description: 'Will place a link in footer of each card rather than header'
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
      type: 'link',
      title: 'Further information'
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
