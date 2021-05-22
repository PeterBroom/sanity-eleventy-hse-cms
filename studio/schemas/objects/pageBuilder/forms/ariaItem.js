import {BsCardHeading} from 'react-icons/bs'

export default {
  title: 'Item',
  name: 'aria.item',
  type: 'object',
  icon: BsCardHeading,
  fields: [
    {
      name: 'attribute',
      title: 'Data attribute',
      type: 'string'
    },
    {
      name: 'value',
      type: 'string',
      title: 'Value'
    }
  ]
}
