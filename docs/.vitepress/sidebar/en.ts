import {DefaultTheme} from 'vitepress';

export const SidebarEnLocale: DefaultTheme.Sidebar = [{
    text: 'Introduction',
    collapsible: true,
    items: [{
        text: 'What is Suri?',
        link: '/en/',
    }, {
        text: 'Overview',
        link: '/en/overview',
    }, {
        text: 'Use cases',
        link: '/en/use-cases',
    }, {
        text: 'FAQs',
        link: '/en/faqs',
    }, {
        text: 'Competitors',
        link: '/en/competitors',
    }, {
        text: 'Tokenomics',
        link: '/en/tokenomics',
    }, {
        text: 'Roadmap',
        link: '/en/roadmap',
    }],
}, {
    text: '🌐 Suri Domains',
    collapsible: true,
    items: [{
        text: 'Domains',
        link: '/en/domains/',
    }, {
        text: 'Tagged suris',
        link: '/en/domains/tagged',
    }, {
        text: 'Formats',
        link: '/en/domains/formats',
    }, {
        text: 'Bookings',
        link: '/en/domains/bookings',
    }, {
        text: 'NFTs',
        link: '/en/domains/nfts',
    }],
}, {
    text: '📜 SUNS Protocol',
    collapsible: true,
    items: [{
        text: 'Protocol',
        link: '/en/protocol/',
    }, {
        text: 'Subscription model',
        link: '/en/protocol/subscription',
    }, {
        text: 'Records',
        link: '/en/protocol/records/',
        items: [{
            text: 'Format',
            link: '/en/protocol/records/format',
        }, {
            text: 'Protocols',
            link: '/en/protocol/records/protocols/',
            items: [{
                text: 'Standard Protocols',
                link: '/en/protocol/records/protocols/standard',
            }],
        }, {
            text: 'Arguments',
            link: '/en/protocol/records/arguments',
        }],
    }, {
        text: 'Searching',
        link: '/en/protocol/searching/',
        items: [{
            text: 'Query Formats',
            link: '/en/protocol/searching/formats',
        }, {
            text: 'Algorithm',
            link: '/en/protocol/searching/algorithm',
        }],
    }, {
        text: 'Authorities',
        link: '/en/protocol/authorities/',
        items: [{
            text: 'Permissions',
            link: '/en/protocol/authorities/permissions',
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
    }, {
        text: 'Migrating from Web2',
        link: '/en/development/web2-migration',
    }],
}];