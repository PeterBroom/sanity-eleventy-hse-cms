export default {
  name: 'bodyCopy',
  title: 'Body copy',
  type: 'object',
  fields: [{
    type: 'portableText',
    name: 'editorInterface',
    title: 'Editor Interface',
  }],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title = 'Body copy'}) {
      return {
        title
      }
    }
  }
}
