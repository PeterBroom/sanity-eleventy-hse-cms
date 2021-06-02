import { GrAction } from 'react-icons/gr'

export default {
  name: 'action',
  title: 'Action',
  type: 'object',
  icon: GrAction,
  fields: [
    {
      name: 'type',
      title: 'Action type',
      type: 'array',
      of: [{ type: 'actionType' }]
    }
  ],
  preview: {
    prepare({ title = 'Form actions' }) {
      return {
        title
      }
    }
  }
}
