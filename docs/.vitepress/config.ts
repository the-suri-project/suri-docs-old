import {DefaultTheme, defineConfigWithTheme} from 'vitepress';
import {SidebarEnLocale} from './sidebar/en';
import {SidebarEsLocale} from './sidebar/es';

interface DefaultThemeConfig extends DefaultTheme.Config {
    locales: Record<string, DefaultTheme.Config>;
}

export default defineConfigWithTheme<DefaultThemeConfig>({
    title: 'Suri',
    locales: {
        '/en/': {
            lang: 'en-US',
            description: 'The official documentation of the Suri protocol',
        },
        '/es/': {
            lang: 'es-ES',
            description: 'La documentación oficial del protocolo Suri',
        },
    },
    cleanUrls: 'with-subfolders',
    themeConfig: {
        logo: '/logo.png',
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