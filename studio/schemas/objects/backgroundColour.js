
export default {
    name: 'backgroundColour',
    type: 'object',
    title: 'Background colour',
    fields: [
        {
            name: 'value',
            title: 'colour',
            type: 'string',
            options: {
            list: [
                { title: 'White', value: 'white'},
                { title: 'Gray', value: 'gray'},
                { title: 'Red', value: 'red'},
                ]
            }
        }
    ]
}