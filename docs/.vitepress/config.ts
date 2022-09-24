import {DefaultTheme, defineConfigWithTheme} from 'vitepress';
import {SidebarEnLocale} from './sidebar/en';
import {SidebarEsLocale} from './sidebar/es';

interface DefaultThemeConfig extends DefaultTheme.Config {
    locales: Record<string, DefaultTheme.Config>;
}

export default defineConfigWithTheme<DefaultThemeConfig>({
    title: '',
    titleTemplate: 'The Suri Project',
    description: 'The official documentation of the Suri project',
    head: [['link', {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
    }], ['link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
    }], ['link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
    }], ['link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicons/android-chrome-192x192.png',
    }], ['link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/favicons/android-chrome-512x512.png',
    }], ['link', {
        rel: 'shortcut icon',
        href: '/favicon.ico',
    }], ['meta', {
        name: 'theme-color',
        content: '#f5d15d',
    }], ['link', {
        rel: 'manifest',
        href: '/site.webmanifest',
    }]],
    locales: {
        '/en/': {
            lang: 'en-US',
        },
        '/es/': {
            lang: 'es-ES',
            description: 'La documentación oficial del proyecto Suri',
        },
    },
    cleanUrls: 'with-subfolders',
    themeConfig: {
        logo: '/header_logo.png',
        socialLinks: [{
            icon: 'github',
            link: 'https://github.com/treviware/suri-docs',
        }, {
            icon: 'twitter',
            link: 'https://twitter.com/SuriProtocol',
        }, {
            icon: 'discord',
            link: 'https://discord.gg/CtzA2kPdA7',
        }],
        footer: {
            copyright: 'Copyright © 2022',
        },
        localeLinks: {
            text: '',
            items: [{
                text: 'English',
                link: `/en/`,
            }, {
                text: 'Español',
                link: `/es/`,
            }],
        },
        locales: {
            '/en/': {
                sidebar: SidebarEnLocale,
                nav: [{
                    text: 'Web',
                    link: 'https://suri.domains',
                }, {
                    text: 'Team',
                    link: '/en/team',
                }],
                editLink: {
                    pattern: 'https://github.com/treviware/suri-docs/edit/main/docs/:path',
                    text: 'Edit this page on GitHub',
                },
            },
            '/es/': {
                sidebar: SidebarEsLocale,
                nav: [{
                    text: 'Web',
                    link: 'https://suri.domains',
                }, {
                    text: 'Equipo',
                    link: '/es/team',
                }],
                docFooter: {
                    prev: 'Pagina anterior',
                    next: 'Próxima página',
                },
                editLink: {
                    pattern: 'https://github.com/treviware/suri-docs/edit/main/docs/:path',
                    text: 'Editar esta página en GitHub',
                },
            },
        },
    },
});