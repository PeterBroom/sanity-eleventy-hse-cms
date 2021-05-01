import {AiOutlineCopy} from 'react-icons/ai'
export default {
  name: 'bodyCopy',
  title: 'Body copy',
  type: 'object',
  icon: AiOutlineCopy,
  fields: [
    {
      type: 'portableText',
      name: 'editorInterface',
      title: 'Editor Interface',
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
      const last = subtitle.gridLast ? 'last' : '';
      const column = subtitle.columns ? subtitle.columns : '12';
      const gridPreview = `${column} ${last}`
      const contentPreview = title ? `${title[0].children[0].text}` : 'Body copy';
      return {
        title:  contentPreview,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}
