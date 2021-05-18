export default {
    name: 'headerMenu',
    title: 'Header navigation menu',
    type: 'document',
    fields: [
        {
            type: 'array',
            name: 'sections',
            title: 'Items',
            of: [{type: 'topNav.section'}]
        }
    ]
}