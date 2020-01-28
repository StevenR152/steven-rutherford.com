const fs = require('fs');

var siteConfig = {
  title: 'Steven Rutherford',
  tagline: 'The tagline of my site',
  url: 'http://steven-rutherford.com/docusaurus-v2/',
  baseUrl: 'http://steven-rutherford.com/docusaurus-v2/',
  favicon: 'img/favicon.ico',
  organizationName: 'Steven Rutherford', // Usually your GitHub org/user name.
  projectName: 'steven-rutherford.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Steven Rutherford',
      logo: {
        alt: 'Steven Rutherford',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};


if (fs.existsSync('./.local')) {
    console.log('We are in local mode');
    siteConfig.baseUrl = '/';
    siteConfig.url = '/';
} 

module.exports = siteConfig;