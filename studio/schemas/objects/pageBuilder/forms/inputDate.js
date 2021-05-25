export default {
    name: 'inputDate',
    title: 'Date',
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
            name: 'required',
            title: 'Required',
            type: 'boolean',
            description: 'Will create a validation rule of required'
        },
        {
            name: 'ariaAttributes',
            title: 'Field attributes',
            type: 'ariaAttributes'
        }
    ]
}
