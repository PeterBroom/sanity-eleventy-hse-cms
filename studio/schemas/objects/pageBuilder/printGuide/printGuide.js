import {AiFillPrinter} from 'react-icons/ai'

export default {
  name: 'printGuide',
  title: 'Print guide',
  type: 'object',
  icon: AiFillPrinter,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'links',
        title: 'Links',
        type: 'array',
        of: [
            {
                type: 'internalLink',
                name: 'links',
                title: 'Links'
            }
        ]
    },
    {
      name: 'grid',
      title: 'Grid',
      type: 'gridLayout'
    },
    {
      name: 'backgroundColour',
      title: 'Background colour',
      type: 'backgroundColour'
    }
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
      const previewTitle = title ? title : 'Print pages';
      return {
        title: `${previewTitle}`,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}
