export default {
    name: 'formBuilder',
    title: 'Form builder',
    type: 'object',
    fieldsets: [
        {name: 'formActions', title: 'Form actions'},
        {name: 'formCopy', title: 'Form copy'},
        {name: 'formLayout', title: 'Form layout'},
        {name: 'formFieldsets', title: 'Add fieldsets'}
    ],
    fields: [
        {
            name: 'action',
            title: 'Form action',
            type: 'url',
            fieldset: 'formActions'
        },
        {
            name: 'autocomplete',
            title: 'Auto complete',
            type: 'boolean',
            description: 'Specifies whether a field should have autocomplete enabled',
            fieldset: 'formActions'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            fieldset: 'formCopy'
        },
        {
            name: 'introductoryText',
            title: 'Introductory text',
            type: 'portableText',
            fieldset: 'formCopy'
        },
        {
            name: 'grid',
            title: 'Grid',
            type: 'gridLayout',
            fieldset: 'formLayout'
        },
        {
            name: 'fields',
            title: 'Field set',
            type: 'array',
            description: 'Add fieldsets so you can begin adding fields',
            fieldset: 'formFieldsets',
            of: [
                {
                  type: 'fieldset'
                }
            ]
        }
    ]
}
