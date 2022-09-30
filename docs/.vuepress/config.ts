import {defineUserConfig} from 'vuepress';
import theme from './theme.js';
import * as path from 'path';

export default defineUserConfig({
    lang: 'en-US',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'The Suri Project',
            description: 'The Suri Project documentation',
        },
        '/es/': {
            lang: 'es-ES',
            title: 'Proyecto Suri',
            description: 'La documentación del proyecto Suri',
        },
    },
    theme,
    shouldPrefetch: false,
    head: [['link', {
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
    }], ['meta', {
        property: 'og:image',
        content: 'https://docs.suri.domains/external-link-image.png',
    }], ['meta', {
        property: 'twitter:card',
        content: 'summary_large_image',
    }], ['meta', {
        property: 'twitter:image',
        content: 'https://docs.suri.domains/external-link-image.png',
    }]],

    plugins: [],

    alias: {
        '@theme-hope/modules/navbar/components/RepoLink.js': path.resolve(__dirname, './components/SocialLinks.js'),
        '@theme-hope/modules/navbar/components/NavScreen.js': path.resolve(__dirname,
            './components/NavScreenWithSocialLinks.js'),
    },
});
