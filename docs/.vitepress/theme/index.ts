import DefaultTheme from 'vitepress/theme';
import TeamPage from './components/TeamPage.vue';
import CenterContent from './components/CenterContent.vue';
import FaqBox from './components/FaqBox.vue';
import './style/custom.scss';
import {Theme, useRouter} from 'vitepress';
import {watch} from 'vue';

export default {
    ...DefaultTheme,
    enhanceApp({
                   app,
                   router,
                   siteData,
               }) {
        // Add components.
        app.component('TeamPage', TeamPage);
        app.component('CenterContent', CenterContent);
        app.component('FaqBox', FaqBox);
    },
    setup(_) {
        const router = useRouter();

        // Set dark style.
        document.documentElement.classList.add('dark');

        // Set language.
        watch(router.route, (newValue) => {
            if (newValue.path === '/') {
                return;
            }

            if (newValue.path.startsWith('/en/')) {
                localStorage.setItem('lang', 'en');
            } else if (newValue.path.startsWith('/es/')) {
                localStorage.setItem('lang', 'es');
            }
        });
    },
} as Theme;