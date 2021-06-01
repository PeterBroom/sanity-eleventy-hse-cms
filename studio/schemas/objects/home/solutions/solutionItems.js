export default {
    name: 'solutionItem',
    title: 'Item',
    type: 'object',
    fieldsets: [
        {name: 'link', title: 'Link'},
    ],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'hiddenTitlePart',
            title: 'Hidden title part',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
            fieldset: 'link'
        },
        {
            type: 'analytics',
            name: 'tracking',
            title: 'Tracking',
            fieldset: 'link'
        },
        {
            name: 'backgroundColour',
            title: 'Background colour',
            type: 'altBackgroundColour'
        }
    ]
}