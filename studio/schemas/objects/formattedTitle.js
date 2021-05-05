
export default {
    name: 'formattedTitle',
    type: 'object',
    title: 'Title',
    fields: [
        {
            name: 'text',
            type: 'string',
            title: 'Text'
        },
        {
            name: 'accronym',
            type: 'string',
            title: 'Accronym',
            description: 'Is this title an accronym for something?'
        }
    ]
}