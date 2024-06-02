import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const title = 'مستندات ستاره';
const config: Config = {
    title: title,
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://mohaymen-ict.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/star-docs/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Mohaymen-ICT', // Usually your GitHub org/user name.
    projectName: 'star-docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fa',
        locales: ['fa'],
    },

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                path: 'team',
                routeBasePath: 'team',
                sidebarPath: './sidebarsTeam.ts'
            }
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'onboarding',
                path: 'onboarding',
                routeBasePath: 'onboarding',
                sidebarPath: './sidebarsOnboarding.ts'
            }
        ],
    ],

    presets: [
        [
            'classic',
            {
                docs: false,
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/mohaymen-logo.png',
        navbar: {
            title: title,
            logo: {
                alt: 'Mohaymen Logo',
                src: 'img/mohaymen-logo.png',
            },
            items: [
                // {
                //   type: 'docSidebar',
                //   sidebarId: 'tutorialSidebar',
                //   position: 'left',
                //   label: 'مستندات',
                // },
                {
                    href: 'https://github.com/Mohaymen-ICT/star-docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'مستندات',
                    items: [
                        {
                            label: 'درباره‌ی واحد',
                            to: '/team/about-team',
                        },
                        {
                            label: 'شروع به کار',
                            to: '/onboarding/intro',
                        },
                    ],
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Mohaymen ICT Group.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
