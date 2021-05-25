
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
            name: 'autofocus',
            title: 'Auto focus',
            type: 'boolean',
            description: 'Specifies that a field should automatically get focus when the page loads'
        },
        {
            name: 'readonly',
            title: 'Ready only',
            type: 'boolean',
            description: 'Specifies that a field is read-only'
        }
    ]
}