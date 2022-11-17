<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
import {useAppConfig, useHead} from "nuxt/app";

useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s - Nuxt x Wordpress',
})
</script>
