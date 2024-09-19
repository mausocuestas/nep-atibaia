import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NEP Atibaia',
  tagline: 'Núcleo de Educação Permanente',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nep-atibaia.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SMS Atibaia', // Usually your GitHub org/user name.
  projectName: 'nep-atibaia', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'NEP Atibaia',
      logo: {
        alt: 'NEP Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Solicitações',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Neste site',
          items: [
            {
              label: 'Carta de Serviços',
              to: '/docs/category/serviços',
            },
            {
              label: 'Rede Intersetorial',
              to: '/locais/category/rede-intersetorial',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Site da Prefeitura',
              href: 'https://www.atibaia.sp.gov.br/',
            },
            {
              label: 'Página da Secretaria de Saúde',
              href: 'https://www.atibaia.sp.gov.br/prefeitura/secretarias/saude',
            },
            {
              label: 'Manual de Procedimentos para Convênio - SMS',
              href: 'https://docs.google.com/document/d/1L0TR0clwLEftfB3xOSNx4eKVo4wltv1VclxT2ePafnc/edit?usp=sharing',
            },
          ],
        },
      ],

      logo: {
        alt: "Logo Atibaia Capital Nacional do Morango",
        src: "/img/selo-capital-nacional-do-morango.png",
        // href: 'https://atibaia.sp.gov.br',
        width: "100",
        height: "58",
      },

      copyright: `© ${new Date().getFullYear()} NEP Atibaia`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
