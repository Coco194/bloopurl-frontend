<template>
  <pageHeader/>
  <router-view />
  <pageFooter/>
</template>

<script>

import pageHeader from '../src/components/headerComponent.vue'
import pageFooter from '../src/components/footerComponent.vue'

export default {
  name: 'App',
  components: {
    pageHeader,
    pageFooter
  }
}
</script>
