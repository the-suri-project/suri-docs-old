import {sidebar} from 'vuepress-theme-hope';

export const enSidebar = sidebar({
    '/': [{
        text: 'Introduction',
        link: '/',
        children: ['overview', 'use-cases', 'faqs', 'competitors', 'tokenomics', 'roadmap'],
    }, {
        text: '🌐 Suri Domains',
        link: 'domains/',
        children: ['domains/tagged', {
            text: 'Formats',
            link: 'domains/formats',
        }, 'domains/bookings', {
            text: 'NFTs',
            link: 'domains/nfts',
        }],
    }, {
        text: '📜 SUNS Protocol',
        link: 'protocol/',
        children: ['protocol/subscription', {
            text: 'Records',
            link: 'protocol/records/',
            children: [{
                text: 'Format',
                link: 'protocol/records/format',
            }, {
                text: 'Protocols',
                link: 'protocol/records/protocols/',
                children: ['protocol/records/protocols/standard'],
            }, {
                text: 'Arguments',
                link: 'protocol/records/arguments',
            }],
        }, {
            text: 'Searching',
            link: 'protocol/searching/',
            children: ['protocol/searching/formats', {
                text: 'Algorithm',
                link: 'protocol/searching/algorithm',
            }],
        }, {
            text: 'Authorities',
            link: 'protocol/authorities/',
            children: [{
                text: 'Permissions',
                link: 'protocol/authorities/permissions',
            }],
        }],
    }],
    '/development/': [{
        text: '🛠 Development',
        link: '/development/',
        children: ['solana-program', {
            text: 'Client SDKs',
            link: 'sdk/',
            children: [{
                text: 'Rust',
                link: 'sdk/rust',
            }, {
                text: 'Typescript',
                link: 'sdk/typescript',
            }],
        }, {
            text: 'Migrate from Web2',
            link: 'web2-migration',
        }],
    }],
});
