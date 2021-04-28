
import {topNav} from '../objects/navigation/main/topNav.js'
export default {
  name: 'settingsMeta',
  type: 'document',
  title: 'Metadata',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title'
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
  ],
  preview: {
    prepare ({title = 'Metadata'}) {
      return {
        title
      }
    }
  }
}
