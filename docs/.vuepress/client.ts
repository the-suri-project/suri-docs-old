import {defineClientConfig} from '@vuepress/client';
import FaqBox from './components/FaqBox.vue';

export default defineClientConfig({
    enhance({app}) {
        app.component('FaqBox', FaqBox);
    },
});