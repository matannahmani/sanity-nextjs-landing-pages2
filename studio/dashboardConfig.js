export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5fba449e4c0b4bc0ac3ffbf6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-9a9isaqr',
                  apiId: '2581268e-971e-489e-9586-87a4318bd727'
                },
                {
                  buildHookId: '5fba449f9314af77c3a319c8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-3gcem2xv',
                  apiId: 'ec0668b5-ef6f-4950-9aca-fe163b5c78e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matannahmani/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-3gcem2xv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
