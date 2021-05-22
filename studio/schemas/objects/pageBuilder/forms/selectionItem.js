import {BsCardHeading} from 'react-icons/bs'

export default {
  title: 'Item',
  name: 'selection.item',
  type: 'object',
  icon: BsCardHeading,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'value',
      type: 'string',
      title: 'Value'
    }
  ]
}
