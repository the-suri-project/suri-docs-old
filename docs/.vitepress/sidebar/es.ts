import {DefaultTheme} from 'vitepress';

export const SidebarEsLocale: DefaultTheme.Sidebar = [{
    text: 'Introducción',
    collapsible: true,
    items: [{
        text: '¿Qué es Suri?',
        link: '/es/',
    }, {
        text: 'Visión General',
        link: '/es/overview',
    }, {
        text: 'Casos de uso',
        link: '/es/use-cases',
    }, {
        text: 'FAQs',
        link: '/es/faqs',
    }, {
        text: 'Competidores',
        link: '/es/competitors',
    }, {
        text: 'Tokenomics',
        link: '/es/tokenomics',
    }, {
        text: 'Roadmap',
        link: '/es/roadmap',
    }],
}, {
    text: '🌐 Dominios Suri',
    collapsible: true,
    items: [{
        text: 'Dominios',
        link: '/es/domains/',
    }, {
        text: 'Suri etiquetados',
        link: '/es/domains/tagged',
    }, {
        text: 'Formatos',
        link: '/es/domains/formats',
    }, {
        text: 'Reservas',
        link: '/es/domains/bookings',
    }, {
        text: 'NFTs',
        link: '/es/domains/nfts',
    }],
}, {
    text: '📜 Protocolo SUNS',
    collapsible: true,
    items: [{
        text: 'Protocolo',
        link: '/es/protocol/',
    }, {
        text: 'Model de suscripciones',
        link: '/es/protocol/subscription',
    }, {
        text: 'Registros',
        link: '/es/protocol/records/',
        items: [{
            text: 'Formato',
            link: '/es/protocol/records/format',
        }, {
            text: 'Protocolos',
            link: '/es/protocol/records/protocols/',
            items: [{
                text: 'Protocolos estándar',
                link: '/es/protocol/records/protocols/standard',
            }],
        }, {
            text: 'Argumentos',
            link: '/es/protocol/records/arguments',
        }],
    }, {
        text: 'Búsqueda',
        link: '/es/protocol/searching/',
        items: [{
            text: 'Formato de Consultas',
            link: '/es/protocol/searching/formats',
        }, {
            text: 'Algoritmo',
            link: '/es/protocol/searching/algorithm',
        }],
    }, {
        text: 'Autoridades',
        link: '/es/protocol/authorities/',
        items: [{
            text: 'Permisos',
            link: '/es/protocol/authorities/permissions',
        }],
    }],
}, {
    text: '🛠 Desarrollo',
    collapsible: true,
    items: [{
        text: '¡Comenzando!',
        link: '/es/development/',
    }, {
        text: 'SDK del Programa Suri',
        link: '/es/development/program-sdk',
    }, {
        text: 'SDKs de clientes',
        link: '/es/development/sdk/',
        items: [{
            text: 'SDK para Rust',
            link: '/es/development/sdk/rust',
        }, {
            text: 'SDK para TypeScript',
            link: '/es/development/sdk/typescript',
        }],
    }, {
        text: 'Migrar desde Web2',
        link: '/es/development/web2-migration',
    }],
}];