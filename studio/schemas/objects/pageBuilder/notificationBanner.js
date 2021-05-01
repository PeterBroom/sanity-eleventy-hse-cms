import {AiOutlineNotification} from 'react-icons/ai'

export default {
  name: 'notificationBanner',
  type: 'object',
  title: 'Notification banner',
  icon: AiOutlineNotification,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'copy',
      type: 'object',
      title: 'Text',
      fields: [{
    name: 'editorInterface',
    title: 'Editor Interface',
    type: 'array',
    of: [{
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'}
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                weak: true,
                to: [
                  {type: 'section'},
                  {type: 'page'}
                ]
              }
            ]
          }
        ]
      }
    }]
  }]
    }
  ]
}
