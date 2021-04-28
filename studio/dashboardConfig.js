export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6061fe26ec5c3d4b31154446',
                  title: 'Sanity HSE Studio',
                  name: 'sanity-eleventy-hse-cms-studio',
                  apiId: 'bd923fa7-1026-4663-a76d-03df302c8ec5'
                },
                {
                  buildHookId: '6061fe26d201e54cb954101d',
                  title: 'HSE Website',
                  name: 'sanity-eleventy-hse-cms',
                  apiId: 'c7b5ddfa-e77c-4b54-b3f8-3f7eec951810'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterBroom/sanity-eleventy-hse-cms',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-eleventy-hse-cms.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent pages', order: '_createdAt desc', types: ['page', 'homepage', 'section']},
      layout: {width: 'medium'}
    }
  ]
}
