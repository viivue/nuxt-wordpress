<script setup>
const {data: siteInfo} = await useFetch('/api/site-info');

useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: `%s - ${siteInfo.value.name}`,
  bodyAttrs: {
    class: 'viivue-nuxt'
  },

  link: [
    {rel: 'icon', type: 'image/x-icon', href: siteInfo.value.favicon}
  ]
});
console.table(siteInfo.value)
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>