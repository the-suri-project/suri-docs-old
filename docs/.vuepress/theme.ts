import {hopeTheme} from 'vuepress-theme-hope';
import {enNavbar, esNavbar} from './navbar/index.js';
import {enSidebar, esSidebar} from './sidebar/index.js';

export default hopeTheme({
    darkmode: 'enable',
    hostname: 'https://docs.suri.domains',
    iconAssets: 'iconfont',
    logo: '/header-logo.svg',
    repo: 'treviware/suri-docs',
    docsDir: 'demo/theme-docs/src',
    pageInfo: [],
    breadcrumb: false,
    locales: {
        '/': {
            navbar: enNavbar,
            sidebar: enSidebar,
            metaLocales: {
                editLink: 'Edit this page on GitHub',
            },
        },

        /**
         * Spanish locale config
         */
        '/es/': {
            navbar: esNavbar,
            sidebar: esSidebar,
            metaLocales: {
                editLink: 'Editar esta página en GitHub',
            },
        },
    },
    blog: {
        medias: {
            'Discord': 'https://discord.gg/CtzA2kPdA7',
        },
    },
    plugins: {
        mdEnhance: {
            container: true,
        },
    },
});
