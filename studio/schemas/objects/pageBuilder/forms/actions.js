export default {
    name: 'action',
    title: 'Action',
    type: 'object',
    fields: [
        {
            name: 'type',
            title: 'Action type',
            type: 'array',
            of: [{type: 'actionType'}]
        },
    ],
    preview: {
        prepare ({title = 'Form actions'}) {
            return {
                title
            }
        }
    }
}