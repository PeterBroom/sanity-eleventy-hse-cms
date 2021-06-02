import { VscChecklist } from 'react-icons/vsc'

export default {
  name: 'selection',
  title: 'Selection field',
  type: 'object',
  icon: VscChecklist,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'hint',
      title: 'Field hint',
      type: 'string',
      description: 'Additional text to hint to user what value to enter'
    },
    {
      name: 'width',
      title: 'Field width',
      type: 'inputWidth'
    },
    {
      name: 'ariaAttributes',
      title: 'Field attributes',
      type: 'ariaAttributes'
    },
    {
      name: 'type',
      title: 'Field type',
      type: 'selectionType'
    },
    {
      name: 'selectionItems',
      title: 'Selection items',
      type: 'array',
      of: [{ type: 'selection.item' }]
    }
  ],
  preview: {
    select: {
      title: 'label'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title
      }
    }
  }
}
