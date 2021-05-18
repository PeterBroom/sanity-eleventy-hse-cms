
export default {
    name: 'altBackgroundColour',
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
                { title: 'Blue', value: 'blue'},
                { title: 'Purple', value: 'purple'},
                { title: 'Orange', value: 'orange'},
                { title: 'Green', value: 'green'}
                ]
            }
        }
    ]
}