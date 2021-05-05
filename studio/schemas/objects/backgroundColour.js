
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
                { title: 'White', value: 'bg-white'},
                { title: 'Gray', value: 'bg-gray'},
                { title: 'Red', value: 'bg-red'},
                ]
            }
        }
    ]
}