<script setup>import {useRouter} from 'vitepress';
import {useLocalStorage} from '@vueuse/core';

const router = useRouter();
const language = useLocalStorage('lang', 'en');
router.go(`/${language.value}/`);
</script>