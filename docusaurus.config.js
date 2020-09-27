module.exports = {
  title: 'Forgenst',
  tagline: 'My personal website',
  url: 'https://forgenst.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.png',
  organizationName: 'forgenst', // Usually your GitHub org/user name.
  projectName: 'new-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Forgenst',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Pages',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/forgenst',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Pages',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/forgenst',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Forgenst. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/edapm/new-website/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/edapm/new-website/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
