
export default {
    name: 'inputAttributes',
    type: 'object',
    title: 'Attributes',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Specifies the name of a field'
        },
        {
            name: 'placeholder',
            title: 'Placeholder',
            type: 'string',
            description: 'Specifies a short hint that describes the expected value of a field'
        },
                {
            name: 'value',
            title: 'Value',
            type: 'string',
            description: 'Specifies the value of a field'
        },
        {
            name: 'max',
            title: 'Max',
            type: 'string',
            description: 'Specifies the maximum value for number and date fields'
        },
        {
            name: 'maxlength',
            title: 'Max length',
            type: 'string',
            description: 'Specifies the maximum number of characters allowed for a field'
        },
        {
            name: 'autocomplete',
            title: 'Auto complete',
            type: 'boolean',
            description: 'Specifies whether a field should have autocomplete enabled'
        },
        {
            name: 'autofocus',
            title: 'Auto focus',
            type: 'boolean',
            description: 'Specifies that a field should automatically get focus when the page loads'
        },
        {
            name: 'required',
            title: 'Required',
            type: 'boolean',
            description: 'Specifies that a field must be filled out before submitting the form'
        }
    ]
}