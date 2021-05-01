import {BsColumnsGap} from 'react-icons/bs';

export default {
    name: 'gridLayout',
    type: 'object',
    title: 'Grid layout',
    fields: [
        {
            name: 'columns',
            title: 'Grid of...',
            type: 'string',
            icon: BsColumnsGap,
            options: {
            list: [
                { title: '1 column', value: '1'},
                { title: '2 column', value: '2'},
                { title: '3 column', value: '3'},
                { title: '4 column', value: '4'},
                { title: '5 column', value: '5'},
                { title: '6 column', value: '6'},
                { title: '7 column', value: '7'},
                { title: '8 column', value: '8'},
                { title: '9 column', value: '9'},
                { title: '10 column', value: '10'},
                { title: '11 column', value: '11'},
                { title: '12 column', value: '12'},
                ]
            }
        },
        {
            name: 'gridLast',
            type: 'boolean',
            title: 'Last item in row'
        }
    ]
}