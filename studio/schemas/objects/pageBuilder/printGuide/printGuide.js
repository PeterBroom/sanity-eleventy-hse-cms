import {AiFillPrinter} from 'react-icons/ai'

export default {
  name: 'printGuide',
  title: 'Print guide',
  type: 'object',
  icon: AiFillPrinter,
  fields: [
    {
      name: 'pageIdentifier',
      title: 'Identifier',
      type: 'reference',
      weak: true,
      to: [{type: 'page'}]
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
      name: 'metadata',
      title: 'Meta data',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description',
          description: 'Describe your blog for search engines and social media.'
        },
        {
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          description: 'Add keywords that describes your blog.',
          of: [{type: 'string'}],
          options: {
            layout: 'tags'
          }
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
      title: '',
      subtitle: 'grid',
    },
    prepare (selection) {
      const {subtitle} = selection
      const last = subtitle.gridLast ? 'last' : '';
      const column = subtitle.columns ? subtitle.columns : '12';
      const gridPreview = `${column} ${last}`
      const previewTitle = 'Print entire guide';
      return {
        title: `${previewTitle}`,
        subtitle: `Grid of ${gridPreview}`
      }
    }
  }
}
