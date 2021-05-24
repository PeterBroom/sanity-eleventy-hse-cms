export default {
    name: 'input',
    title: 'Input',
    type: 'object',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string'
        },
        {
            name: 'hint',
            title: 'Field hint',
            type: 'string',
            description: 'Additional text to hint to user what value to enter'
        },
        {
            name: 'type',
            title: 'Field type',
            type: 'inputType'
        },
        {
            name: 'width',
            title: 'Field width',
            type: 'inputWidth'
        },
        {
            name: 'fieldAttributes',
            title: 'Field attributes',
            type: 'inputAttributes'
        },
        {
            name: 'ariaAttributes',
            title: 'Field attributes',
            type: 'ariaAttributes'
        }
    ]

}