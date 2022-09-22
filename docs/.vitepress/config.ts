import {DefaultTheme, defineConfigWithTheme} from 'vitepress';
import {SidebarEnLocale} from './sidebar/en';
import {SidebarEsLocale} from './sidebar/es';

interface DefaultThemeConfig extends DefaultTheme.Config {
    locales: Record<string, DefaultTheme.Config>;
}

export default defineConfigWithTheme<DefaultThemeConfig>({
    title: 'The Suri Project',
    description: 'The official documentation of the Suri project',
    locales: {
        '/en/': {
            lang: 'en-US',
        },
        '/es/': {
            lang: 'es-ES',
            title: 'Proyecto Suri',
            description: 'La documentación oficial del proyecto Suri',
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