import {BsCardHeading} from 'react-icons/Bs'

export default {
  title: 'Item',
  name: 'card.item',
  type: 'object',
  icon: BsCardHeading,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'copy',
      type: 'string',
      title: 'Copy'
    },
    {
      type: 'reference',
      name: 'target',
      title: 'Target page',
      to: [{type: 'page'}]
    }
  ]
}
