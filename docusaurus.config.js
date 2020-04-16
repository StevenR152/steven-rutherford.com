const fs = require('fs');

var siteConfig = {
  title: 'Steven Rutherford',
  tagline: 'Senior Engineer - Java Microservices, K8s, DevOps, AWS, Infrastructure as Code, CI/CD',
  url: 'http://steven-rutherford.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'StevenR152', // Usually your GitHub org/user name.
  projectName: 'stevenrutherford.com', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    navbar: {
      title: 'Steven Rutherford',
      logo: {
        alt: 'Steven Rutherford',
        src: 'img/logo.jpg',
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'docs/overview-of-tutorial-exercises', label: 'Tutorials', position: 'left'},
        {to: 'docs/subscribe-to-updates', label: 'Subscribe to Updates', position: 'right'},
        {
          href: 'https://github.com/StevenR152',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learning Tech',
          items: [
            {
              label: 'Want to Learn Tech?',
              to: 'docs/overview-of-tutorial-exercises',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            }
          ],
        },
        {
          title: 'Developer',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/StevenR152',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Steven Rutherford.`,
    },
    googleAnalytics: {
      trackingID: 'UA-163692629-1',
    },
  },
  scripts: ['/js/mailer.js'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
