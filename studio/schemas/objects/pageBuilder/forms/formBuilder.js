export default {
    name: 'formBuilder',
    title: 'Form builder',
    type: 'object',
    fields: [
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
            title: 'Field set',
            type: 'array',
            of: [
                {
                  type: 'fieldset'
                }
            ]
        }
    ]

}