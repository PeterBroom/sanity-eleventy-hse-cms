import {IoIosArrowDropdown} from 'react-icons/io'

export default {
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  icon: IoIosArrowDropdown,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'accordionArray',
      type: 'array',
      title: 'Items',
      of: [{type: 'accordionItem'}]
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
    prepare (selection) {
      const {title, subtitle} = selection
      const previewTitle = title ? title : 'Accordion';
      const last = subtitle.gridLast ? 'last' : '';
      const column = subtitle.columns ? subtitle.columns : '12';
      const gridPreview = `${column} ${last}`
      return {
        title: `${previewTitle}`,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}
