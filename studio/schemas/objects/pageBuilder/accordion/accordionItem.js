import {BsCardText} from 'react-icons/bs'

export default {
  name: 'accordionItem',
  type: 'object',
  title: 'Accordion item',
  icon: BsCardText,
  fields: [
    {
      name: 'accordionHeading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'accordionCopy',
      type: 'text',
      title: 'Text'
    }
  ]
}
