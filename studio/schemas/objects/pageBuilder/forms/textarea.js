import { BsTextLeft } from 'react-icons/bs'
export default {
  name: 'textarea',
  title: 'Text area',
  type: 'object',
  icon: BsTextLeft,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string'
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
    }
  ]
}
