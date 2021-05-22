export default {
    name: 'textarea',
    title: 'Text area',
    type: 'object',
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