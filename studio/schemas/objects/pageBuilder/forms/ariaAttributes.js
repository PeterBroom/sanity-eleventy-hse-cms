import {IoGridOutline} from 'react-icons/io5'

export default {
  name: 'ariaAttributes',
  title: 'Aria attributes',
  type: 'object',
  icon: IoGridOutline,
  fields: [
    {
      name: 'ariaItems',
      title: 'Aria Items',
      type: 'array',
      of: [{type: 'aria.item'}],
      options: {
        layout: 'list'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare (select) {
      return {
        title: `${previewTitle}`,
      }
    }
  }
}
