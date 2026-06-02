<template>
    <HeaderComponent v-if=$route.meta.showHeaderFooter></HeaderComponent>
    <router-view/>
    <FooterComponent v-if=$route.meta.showHeaderFooter></FooterComponent>
</template>

<script>
import HeaderComponent from './components/headerComponent.vue';
import FooterComponent from './components/footerComponent.vue';



export default {
    name: 'App',
    components: {
        HeaderComponent,
        FooterComponent

    }
}
</script>
