import {sidebar} from 'vuepress-theme-hope';

export const esSidebar = sidebar({
    '/es/': [{
        text: 'Introducción',
        link: '/',
        children: ['overview', 'use-cases', 'faqs', 'competitors', 'tokenomics', 'roadmap'],
    }, {
        text: '🌐 Dominios Suri',
        link: 'domains/',
        children: ['domains/tagged', {
            text: 'Formatos',
            link: 'domains/formats',
        }, 'domains/bookings', {
            text: 'NFTs',
            link: 'domains/nfts',
        }],
    }, {
        text: '📜 Protocolo SUNS',
        link: 'protocol/',
        children: ['protocol/subscription', {
            text: 'Registros',
            link: 'protocol/records/',
            children: [{
                text: 'Formato',
                link: 'protocol/records/format',
            }, {
                text: 'Protocolos',
                link: 'protocol/records/protocols/',
                children: ['protocol/records/protocols/standard'],
            }, {
                text: 'Argumentos',
                link: 'protocol/records/arguments',
            }],
        }, {
            text: 'Búsqueda',
            link: 'protocol/searching/',
            children: ['protocol/searching/formats', {
                text: 'Algoritmo',
                link: 'protocol/searching/algorithm',
            }],
        }, {
            text: 'Autoridades',
            link: 'protocol/authorities/',
            children: [{
                text: 'Permisos',
                link: 'protocol/authorities/permissions',
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
