import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NEP Atibaia',
  tagline: 'Núcleo de Educação Permanente',
  favicon: 'img/favicon.ico',
  url: 'https://nep-atibaia.vercel.app',
  baseUrl: '/',
  organizationName: 'SMS Atibaia', // Usually your GitHub org/user name.
  projectName: 'nep-atibaia', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          postsPerPage: 5,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: 'manual',
      path: 'manual',
      routeBasePath: 'manual',
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ],
  [
    '@easyops-cn/docusaurus-search-local',
    {
      // Opcional: gera o arquivo de indexação para a busca local (ex: se você quiser fazer deploy da documentação como um site estático).
      indexDocs: true,
      indexBlog: false,
      indexPages: true,
      // Opcional: define o idioma dos documentos (pode ser uma string ou um array de strings)
      language: ["en"],
    }
  ],
],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'NEP Atibaia',
      logo: {
        alt: 'NEP Site Logo',
        src: 'img/logo-nep.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentos',
        },
        {
          to: '/manual/intro',    // ./docs-api/Intro.md
          label: 'Manual',
          position: 'left',
          sidebar: {
            hideable: false,
            autoCollapseCategories: true,
          },
        },
        // {
        //   to: '/blog', 
        //   label: 'Blog', 
        //   position: 'left'
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Neste site',
          items: [
            {
              label: 'Solicitações',
              to: '/docs/intro',
            },
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
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
