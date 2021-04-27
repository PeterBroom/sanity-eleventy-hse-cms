export default {
  name: 'portableText',
  type: 'array',
  title: 'Excerpt',
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
        {title: 'Emphasis', value: 'em'},
        {title: "Code", value: "code" },
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
}
