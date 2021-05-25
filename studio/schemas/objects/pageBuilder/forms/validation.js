export default {
    name: 'validation',
    type: 'object',
    fields: [
        {
            name: 'min',
            title: 'Min',
            type: 'string',
            description: 'Specifies the minimum value for number and date fields'
        },
        {
            name: 'max',
            title: 'Max',
            type: 'string',
            description: 'Specifies the maximum value for number and date fields'
        },
        {
            name: 'minlength',
            title: 'Min length',
            type: 'string',
            description: 'Specifies the minimum number of characters allowed for a field'
        },
        {
            name: 'maxlength',
            title: 'Max length',
            type: 'string',
            description: 'Specifies the maximum number of characters allowed for a field'
        },
        {
            name: 'required',
            title: 'Required',
            type: 'boolean',
            description: 'Will create a validation rule of required',
        },
        {
            name: 'customMessage',
            title: 'Custom vaidation message',
            type: 'string',
            description: 'Specifies a message when field is required',

        },
        {
            name: 'customPattern',
            title: 'Custom vaidation pattern',
            type: 'string',
            description: 'Must be in regex format',
        }
    ]
}