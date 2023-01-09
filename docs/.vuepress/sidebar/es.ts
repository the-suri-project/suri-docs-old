import {sidebar} from 'vuepress-theme-hope';

export const esSidebar = sidebar({
    '/es/': [{
        text: 'Introducción',
        link: '/es/',
        children: ['overview', 'use-cases', 'faqs', 'competitors', 'tokenomics', 'roadmap'],
    }, {
        text: '🌐 Dominios Suri',
        link: 'domains/',
        children: [{
            text: 'Dominios de primer nivel',
            link: 'domains/tld',
        }, 'domains/tagged', {
            text: 'Formatos',
            link: 'domains/formats',
        }, 'domains/bookings', {
            text: 'NFTs',
            link: 'domains/nfts',
        }],
    }, {
        text: '📜 Programa SUNS',
        link: 'suns/',
        children: ['suns/subscription', {
            text: 'Registros',
            link: 'suns/records/',
            children: [{
                text: 'Formato',
                link: 'suns/records/format',
            }, {
                text: 'Protocolos',
                link: 'suns/records/protocols/',
                children: ['suns/records/protocols/standard', 'suns/records/protocols/aliases'],
            }, {
                text: 'Argumentos',
                link: 'suns/records/arguments',
            }],
        }, {
            text: 'Búsqueda',
            link: 'suns/searching/',
            children: ['suns/searching/formats', {
                text: 'Algoritmo',
                link: 'suns/searching/algorithm',
            }],
        }, {
            text: 'Autoridades',
            link: 'suns/authorities/',
            children: [{
                text: 'Permisos',
                link: 'suns/authorities/permissions',
            }],
        }],
    }],
    '/es/development/': [{
        text: '🛠 Desarrollo',
        link: '/es/development/',
        children: ['solana-program', {
            text: 'SDKs de clientes',
            link: 'sdk/',
            children: [{
                text: 'Rust',
                link: 'sdk/rust',
            }, {
                text: 'Typescript',
                link: 'sdk/typescript',
            }],
        }, {
            text: 'Migrar desde Web2',
            link: 'web2-migration',
        }],
    }],
});
