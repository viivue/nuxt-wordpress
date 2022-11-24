<script setup>
const siteInfo = useState("siteInfo");
const acfOptions = useState("acfOptions");
</script>

<template>
  <nuxt-link :to="{name:'index'}" class="site-logo d-block img-wrapper-contain">
    <img :alt="siteInfo.name" :src="acfOptions.logo.src"/>
  </nuxt-link>
</template>

<style scoped>
.site-logo {width:60px;}
</style>