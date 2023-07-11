export const faThemeConfig: any = {
  sidebar: [
    {
      text: 'معرفی',
      link: '/fa/introduction'
    },
    {
      text: 'شروع سریع',
      link: '/fa/quick-start'
    },
    {
      text: 'پکیج های بک-اند',
      link: '/fa/backend-packages/index',
      collapsed: true,
      items: [
        {
          text: 'Laravel',
          link: '/fa/backend-packages/laravel'
        },
        {
          text: 'ExpressJs',
          link: '/fa/backend-packages/expressjs'
        },
        {
          text: 'Go',
          link: '/fa/backend-packages/go'
        },
        {
          text: 'Django',
          link: '/fa/backend-packages/django'
        }
      ]
    },
    {
      text: 'مثال ها',
      link: '/fa/examples'
    }
  ],
  editLink: {
    pattern: 'https://github.com/FilterItTool/docs/edit/main/src/:path',
    text: 'این صفحه را در GitHub ویرایش کنید'
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/FilterItTool' }
  ],

  footer: {
    message: 'MIT مجوز',
    copyright: `کپی رایت    © 2023-${new Date().getFullYear()} عماد ملک پور`
  }
};
