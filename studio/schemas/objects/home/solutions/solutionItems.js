export default {
    name: 'solutionItem',
    title: 'Item',
    type: 'object',
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
        },
        {
            name: 'backgroundColour',
            title: 'Background colour',
            type: 'altBackgroundColour'
        }
    ]
}