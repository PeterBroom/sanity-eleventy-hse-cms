
export default {
    name: 'inputType',
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
                { title: 'Text', value: 'text'},
                { title: 'Numeric', value: 'number'},
                { title: 'Telephone', value: 'tel'},
                { title: 'Email', value: 'email'},
                { title: 'Date', value: 'date'},
                { title: 'URL', value: 'url'},
                { title: 'Hidden', value: 'hidden'},
                ]
            }
        }
    ]
}