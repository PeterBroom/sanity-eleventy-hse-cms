export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'formattedTitle',
      title: 'Title',
    },
    {
      name: 'heroClass',
      type: 'string',
      title: 'Class name'
    },
    {
      type: 'portableText',
      name: 'editorInterface',
      title: 'Editor Interface',
    },
    {
      type: "cloudinary.asset",
      name: "heroImage",
      description: "This asset is served from Cloudinary",
    },
    {
      name: 'heroLink',
      type: 'object',
      title: 'Link',
      fields: [{
        type: 'string',
        name: 'target',
        title: 'Target page'
      }]
    },
    {
      name: 'backgroundColour',
      title: 'Background colour',
      type: 'altBackgroundColour'
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
