export default {
    name: 'fieldset',
    title: 'Fieldset',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Legend title',
            type: 'string'
        },
        {
            name: 'fields',
            title: 'Form fields',
            type: 'array',
            of: [
                {
                  type: 'input'
                },
                {
                  type: 'textarea'
                },
                {
                  type: 'selection'
                }
            ]
        }
    ]
}