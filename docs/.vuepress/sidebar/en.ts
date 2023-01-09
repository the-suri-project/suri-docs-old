import {sidebar} from 'vuepress-theme-hope';

export const enSidebar = sidebar({
    '/': [{
        text: 'Introduction',
        link: '/',
        children: ['overview', 'use-cases', 'faqs', 'competitors', 'tokenomics', 'roadmap'],
    }, {
        text: '🌐 Suri Domains',
        link: 'domains/',
        children: [{
            text: 'Top Level Domains',
            link: 'domains/tld',
        }, 'domains/tagged', {
            text: 'Formats',
            link: 'domains/formats',
        }, 'domains/bookings', {
            text: 'NFTs',
            link: 'domains/nfts',
        }],
    }, {
        text: '📜 SUNS Program',
        link: 'suns/',
        children: ['suns/subscription', {
            text: 'Records',
            link: 'suns/records/',
            children: [{
                text: 'Format',
                link: 'suns/records/format',
            }, {
                text: 'Protocols',
                link: 'suns/records/protocols/',
                children: ['suns/records/protocols/standard', 'suns/records/protocols/aliases'],
            }, {
                text: 'Arguments',
                link: 'suns/records/arguments',
            }],
        }, {
            text: 'Searching',
            link: 'suns/searching/',
            children: ['suns/searching/formats', {
                text: 'Algorithm',
                link: 'suns/searching/algorithm',
            }],
        }, {
            text: 'Authorities',
            link: 'suns/authorities/',
            children: [{
                text: 'Permissions',
                link: 'suns/authorities/permissions',
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
