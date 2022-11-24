<script setup>
</script>


<template>
  <div class="site-header d-flex fd-column ai-center">

    <TheLogo/>
    <br>
    <MenuList :location="'top-menu'"/>
    <MenuList :location="'main-menu'"/>

  </div>
</template>


<style scoped>
.site-header {padding:20px;}
</style>