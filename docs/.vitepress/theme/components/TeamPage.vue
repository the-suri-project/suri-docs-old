<script lang="ts" setup>
import {VPTeamMembers, VPTeamPage, VPTeamPageTitle} from 'vitepress/theme';

const props = defineProps<{
    lang: string,
}>();

const members = [{
    avatar: '/team/julio.png',
    name: 'Julio Treviño',
    title: 'CEO / Developer',
    links: [{
        icon: 'github',
        link: 'https://github.com/juliotpaez',
    }, {
        icon: 'twitter',
        link: 'https://twitter.com/juliotpaez',
    }, {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/julio-trevi%C3%B1o-p%C3%A1ez/',
    }],
}, {
    avatar: '/team/alex.jpg',
    name: 'Alejandro González',
    title: 'Marketer',
    links: [{
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/alejandrogonzalezcobos',
    }],
}, {
    avatar: '/team/david.jpg',
    name: 'David',
    title: 'Designer',
}];

let title = 'Our Team';
let message = 'The Suri project is being developed by one of the most professional and dedicated team to build infrastructures in web3, some of whom have chosen to be featured below.';

if (props.lang === 'es') {
    title = 'Nuestro Equipo';
    message =
        'El proyecto Suri está siendo desarrollado por uno de los equipos más profesionales y dedicados a construir infraestructuras en web3, algunos de los cuales han decidido ser presentados a continuación.';
}
</script>

<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template #title>
                {{ title }}
            </template>
            <template #lead>
                {{ message }}
            </template>
        </VPTeamPageTitle>
        <VPTeamMembers :members="members"/>
    </VPTeamPage>
</template>

<style lang="scss" scoped>

</style>
