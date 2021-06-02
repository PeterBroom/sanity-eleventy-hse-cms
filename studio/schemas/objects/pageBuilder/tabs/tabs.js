import {BsCardList} from 'react-icons/bs'

export default {
  name: 'tabs',
  type: 'object',
  title: 'Tabs',
  icon: BsCardList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title will be hidden from the screen but not from screen readers'
    },
    {
      name: 'tabArray',
      type: 'array',
      title: 'Tab items',
      of: [{ type: 'tabItem' }]
    },
    {
      name: 'grid',
      title: 'Grid',
      type: 'gridLayout'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'grid'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      const previewTitle = title ? title : 'Tab'
      const last = subtitle.gridLast ? 'last' : ''
      const column = subtitle.columns ? subtitle.columns : '12'
      const gridPreview = `${column} ${last}`
      return {
        title: `${previewTitle}`,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}
