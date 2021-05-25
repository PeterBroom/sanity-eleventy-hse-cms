
export default {
    name: 'actionType',
    type: 'object',
    title: 'Action type',
    fields: [
        {
            name: 'value',
            title: 'Choose an action',
            type: 'string',
            options: {
            list: [
                { title: 'Submit', value: 'submit'},
                { title: 'Reset', value: 'reset'},
                ]
            }
        }
    ]
}