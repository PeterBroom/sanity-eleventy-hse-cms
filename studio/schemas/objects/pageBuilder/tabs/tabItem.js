import { BsCardText } from 'react-icons/bs'

export default {
  name: 'tabItem',
  type: 'object',
  title: 'Tab item',
  icon: BsCardText,
  fields: [
    {
      name: 'tabHeading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'tabContent',
      type: 'portableText',
      title: 'Content'
    }
  ]
}
