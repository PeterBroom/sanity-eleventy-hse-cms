export default {
  name: 'settingsGlobals',
  type: 'document',
  title: 'Globals',
  fields: [
    {
      name: 'content',
      type: 'portableText',
      title: 'Content',
    },
    {
      name: 'betaBanner',
      type: 'boolean',
      title: 'Enabled',
      description: 'Enable to display across pages sitewide'
    }
  ],
  preview: {
    prepare ({title = 'Globals'}) {
      return {
        title
      }
    }
  }
}
