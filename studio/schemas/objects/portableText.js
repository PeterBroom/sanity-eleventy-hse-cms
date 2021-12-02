import React from 'react'
import { MdSuperscript, MdSubscript } from 'react-icons/md'

const supRender = props => (
  <sup>{props.children}</sup>
)
const subRender = props => (
  <sub>{props.children}</sub>
)

console.log('MdSuperscript', MdSuperscript)

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
        {
          title: "Superscript", 
          value: "sup", 
          blockEditor: {
            icon: MdSuperscript,
            render: supRender
          }
        },
        {
          title: "Subscript", 
          value: "sub",
          blockEditor: {
            icon: MdSubscript,
            render: subRender
          }
        },
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
            },
            {
              type: 'string',
              name: 'tracking',
              title: 'Tracking code',
              description: 'Add tracking codes as a url string. Must start with a question mark.'
            }
          ]
        }
      ]
    }
  }]
}
