import {BsCardList} from 'react-icons/bs'

export default {
  name: 'linkBlock',
  title: 'Resources box',
  type: 'object',
  icon: BsCardList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      type: 'array',
      name: 'links',
      title: 'Links',
      of: [
        {
          name: 'target',
          type: 'reference',
          to: [
            {type: 'section'},
            {type: 'homepage'},
            {type: 'page'},
          ]
        }
      ],
    },
    {
      name: 'more',
      title: 'More information',
      type: 'object',
      fields: [
        {
          name: 'moreTitle',
          type: 'string',
          title: 'Link title',
        },
        {
          name: 'moreRef',
          type: 'reference',
          title: 'Page reference',
          to: [{type: 'page'}]
        },
        {
          name: 'moreRefRelative',
          type: 'string',
          title: 'Relative link',
        },
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
      const previewTitle = title ? title : 'Cards';
      return {
        title: `${previewTitle}`,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}
