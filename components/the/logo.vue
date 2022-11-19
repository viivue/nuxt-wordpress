<script setup>
const siteInfo = useState("siteInfo");
</script>

<template>
  <nuxt-link :to="{name:'index'}" class="site-logo d-block img-wrapper-contain">
    <img :alt="siteInfo.name" :src="siteInfo.favicon"/>
  </nuxt-link>
</template>

<style scoped>
.site-logo {width:60px;}
</style>