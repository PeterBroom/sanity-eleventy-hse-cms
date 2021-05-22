export default {
    name: 'formBuilder',
    title: 'Form builder',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Form title',
            type: 'string'
        },
        {
            name: 'action',
            title: 'Form action',
            type: 'url'
        },
        {
            name: 'grid',
            title: 'Grid',
            type: 'gridLayout'
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