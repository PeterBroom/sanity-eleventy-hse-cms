import { AiOutlineBorderVerticle } from 'react-icons/ai'
export default {
  name: 'divider',
  type: 'object',
  title: 'Page divider',
  icon: AiOutlineBorderVerticle,
  fields: [
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
      const last = subtitle.gridLast ? 'last' : ''
      const column = subtitle.columns ? subtitle.columns : '12'
      const gridPreview = `${column} ${last}`
      const previewTitle = title ? title : 'Divider'
      return {
        title: `${previewTitle}`,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}