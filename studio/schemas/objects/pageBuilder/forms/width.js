
export default {
    name: 'inputWidth',
    type: 'object',
    title: 'Width',
    fields: [
        {
            name: 'value',
            title: 'Choose a width',
            type: 'string',
            options: {
            list: [
                { title: 'Default', value: ''},
                { title: 'Small input', value: 'input-width-s'},
                { title: 'Medium input', value: 'input-width-m'},
                { title: 'Large input', value: 'input-width-l'},
                { title: 'Half width input', value: 'input-width-half'},
                { title: 'Full width input', value: 'input-width-full'},
                { title: '1 digit', value: 'input-digits-1'},
                { title: '2 digits', value: 'input-digits-2'},
                { title: '3 digits', value: 'input-digits-3'},
                { title: '4 digits', value: 'input-digits-4'},
                ]
            }
        }
    ]
}