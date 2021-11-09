import {AiOutlineCopy} from 'react-icons/ai'
export default {
  name: 'pagination',
  title: 'Pagination',
  type: 'object',
  icon: AiOutlineCopy,
  fields: [
    {
      name: 'paginationLinks',
      title: 'Previous/Next',
      type: 'object',
      fields: [
        {
          name: 'pageRefPrevious',
          type: 'link',
          title: 'Previous'
        },
        {
          name: 'pageRefNext',
          type: 'link',
          title: 'Next'
        }
      ]
    },
    {
      name: 'grid',
      title: 'Grid',
      type: 'gridLayout'
    }
  ],
  preview: {
    select: {
      title: 'editorInterface',
      subtitle: 'grid'
    },
    prepare (selection) {
      const {title, subtitle} = selection
      const last = subtitle.gridLast ? 'last' : ''
      const column = subtitle.columns ? subtitle.columns : '12'
      const gridPreview = `${column} ${last}`
      const contentPreview = title ? `${title[0].children[0].text}` : 'Pagination'
      return {
        title: contentPreview,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}
