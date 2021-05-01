import {AiOutlineYoutube} from 'react-icons/ai'
export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  icon: AiOutlineYoutube,
  fields: [
    {
      name: 'url',
      type: 'string',
      title: 'YouTube video URL',
      description: 'Example https://www.youtube.com/watch?v=SaaNwINjJhk'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'transcript',
      type: 'excerptPortableText',
      title: 'Transcript'
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
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
      const last = subtitle.gridLast ? 'last' : '';
      const column = subtitle.columns ? subtitle.columns : '12';
      const gridPreview = `${column} ${last}`
      const previewTitle = title ? title : 'Youtube video';
      return {
        title: `${previewTitle}`,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}