<script setup>
const {data: siteInfo} = await useFetch('/api/site-info');
const {data: acfOptions} = await useFetch('/api/acf-options');

useState("siteInfo", () => siteInfo.value);
useState("acfOptions", () => acfOptions.value);

useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: `%s - ${siteInfo.value.name}`,
  bodyAttrs: {
    class: 'viivue-nuxt'
  },

  link: [
    {rel: 'icon', type: 'image/x-icon', href: siteInfo.value.favicon}
  ],

  meta: [
    {name: "twitter:card", content: 'summary_large_image'}
  ]
});
//console.table(siteInfo.value)
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>