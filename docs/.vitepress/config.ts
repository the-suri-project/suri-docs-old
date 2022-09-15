import {DefaultTheme, defineConfigWithTheme} from 'vitepress';

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
                sidebar: [{
                    text: 'Introduction',
                    collapsible: true,
                    items: [{
                        text: 'What is Suri?',
                        link: '/en/',
                    }, {
                        text: 'Overview',
                        link: '/en/overview',
                    }, {
                        text: 'Applications',
                        link: '/en/applications',
                    }, {
                        text: 'FAQs',
                        link: '/en/faqs',
                    }, {
                        text: 'Competitors',
                        link: '/en/competitors',
                    }],
                }, {
                    text: '🌐 Suri Domains',
                    collapsible: true,
                    items: [{
                        text: 'Domains',
                        link: '/en/domains/',
                    }, {
                        text: 'Formats',
                        link: '/en/domains/formats',
                    }, {
                        text: 'Bookings',
                        link: '/en/domains/bookings',
                    }],
                }, {
                    text: '📜 Suri Protocol',
                    collapsible: true,
                    items: [{
                        text: 'Protocol',
                        link: '/en/protocol/',
                    }, {
                        text: 'Records',
                        link: '/en/protocol/records/',
                        items: [{
                            text: 'Formats',
                            link: '/en/protocol/records/formats',
                        }, {
                            text: 'Protocols',
                            link: '/en/protocol/records/protocols/',
                        }, {
                            text: 'Values',
                            link: '/en/protocol/records/values',
                        }, {
                            text: 'Standard Protocols',
                            link: '/en/protocol/records/protocols/standard',
                        }],
                    }, {
                        text: 'Record Queries',
                        link: '/en/protocol/queries/',
                        items: [{
                            text: 'Query Formats',
                            link: '/en/protocol/queries/formats',
                        }, {
                            text: 'Search Algorithm',
                            link: '/en/protocol/queries/algorithm',
                        }],
                    }],
                }, {
                    text: '🛠 Development',
                    collapsible: true,
                    items: [{
                        text: 'Getting started',
                        link: '/en/development/',
                    }, {
                        text: 'Suri Program SDK',
                        link: '/en/development/program-sdk',
                    }, {
                        text: 'Client SDKs',
                        link: '/en/development/sdk/',
                        items: [{
                            text: 'Rust SDK',
                            link: '/en/development/sdk/rust',
                        }, {
                            text: 'TypeScript SDK',
                            link: '/en/development/sdk/typescript',
                        }],
                    }],
                }],
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
                sidebar: [{
                    text: 'Introducción',
                    collapsible: true,
                    items: [{
                        text: '¿Qué es Suri?',
                        link: '/es/',
                    }, {
                        text: 'Visión General',
                        link: '/es/overview',
                    }],
                }],
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