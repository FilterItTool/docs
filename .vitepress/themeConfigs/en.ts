export const enThemeConfig: any = {
  sidebar: [
    {
      text: 'Introduction',
      link: '/introduction'
    },
    {
      text: 'Quick start',
      link: '/quick-start'
    },
    {
      text: 'Backend Packages',
      link: '/backend-packages/index',
      collapsed: true,
      items: [
        {
          text: 'Laravel',
          link: '/backend-packages/laravel'
        },
        {
          text: 'ExpressJs',
          link: '/backend-packages/expressjs'
        },
        {
          text: 'Go',
          link: '/backend-packages/go'
        },
        {
          text: 'Django',
          link: '/backend-packages/django'
        }
      ]
    },
    {
      text: 'Examples',
      link: '/examples'
    }
  ],
  editLink: {
    pattern: 'https://github.com/FilterItTool/docs/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/FilterItTool' }
  ],

  footer: {
    message: 'MIT License',
    copyright: `Copyright © 2023-${new Date().getFullYear()} Emad Malekpour`
  }
};
