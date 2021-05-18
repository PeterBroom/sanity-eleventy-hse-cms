export default {
    name: 'solutions',
    title: 'Solutions',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'grid',
            title: 'grid',
            type: 'gridLayout'
        },
        {
            name: 'solutionItems',
            title: 'Items',
            type: 'array',
            of: [{type: 'solutionItem'}]
        },
    ]
}