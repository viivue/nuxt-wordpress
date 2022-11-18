<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s - Nuxt x Wordpress',
  bodyAttrs: {
    class: 'viivue-nuxt'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>