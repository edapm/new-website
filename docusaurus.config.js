module.exports = {
  title: 'Forgenst',
  tagline: 'My personal website',
  url: 'https://forgenst.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.png',
  themeConfig: {
    navbar: {
      title: 'Forgenst',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: 'https://blog.forgenst.com', label: 'Blog', position: 'right'},
        { to: 'https://edapm.forgenst.com', label: 'Portfolio', position: 'right' },
        {
          href: 'https://github.com/edapm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'About Me',
              to: 'pages/',
            },
            {
              label: 'Projects',
              to: 'pages/projects',
            },
            {
              label: 'Contact Me',
              to: 'pages/contact-me',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.forgenst.com',
            },
            {
              label: 'Portfolio',
              to: 'https://edapm.forgenst.com',
            },
            {
              label: 'Status',
              to: 'https://status.forgenst.com',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Email',
              href: 'mailto:ed@forgenst.com?subject=About%20your%20Website',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/forgenst',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/12993670/edapm',
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
          routeBasePath: 'pages',
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
