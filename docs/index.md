<script setup>import {useRouter} from 'vitepress';
import {useLocalStorage} from '@vueuse/core';
import {isClientSide} from '.vitepress/theme/utils/clientOnly';

const router = useRouter();
const language = useLocalStorage('lang', 'en');

if (isClientSide()){
    location.replace(`${location.origin}/${language.value}/`);
}
</script>