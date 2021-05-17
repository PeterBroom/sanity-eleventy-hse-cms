import {AiOutlineMail} from 'react-icons/ai'

export default {
  name: 'subscribe',
  title: 'Subscribe',
  type: 'object',
  icon: AiOutlineMail,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'copy',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'topicId',
      type: 'string',
      title: 'Topic ID',
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
      const contentPreview = title ? `${title}` : 'Body copy';
      return {
        title:  contentPreview,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}
