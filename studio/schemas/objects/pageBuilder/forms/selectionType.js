
export default {
    name: 'selectionType',
    type: 'object',
    title: 'Field type',
    fields: [
        {
            name: 'value',
            title: 'Choose a type',
            type: 'string',
            description: 'Select a format for this field',
            options: {
            list: [
                { title: 'Checkbox', value: 'checkbox'},
                { title: 'Radio', value: 'radio'},
                { title: 'Select', value: 'select'}
                ]
            }
        },
        {
            name: 'inline',
            title: 'Display inline',
            type: 'boolean',
            description: 'For radio buttons only'
        }
    ]
}