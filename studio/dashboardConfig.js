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
                  buildHookId: '5cd431cdd31f16ed0804518c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fqre54mq',
                  apiId: 'a091d200-272d-4f08-97c7-a506921e2b92'
                },
                {
                  buildHookId: '5cd431ce3068b23a8c26fd8b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-iyo9m9js',
                  apiId: '5b4c16e9-8c9f-4046-ae11-44a6c407d930'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-iyo9m9js.netlify.com', category: 'apps'}
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
