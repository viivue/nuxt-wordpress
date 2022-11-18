<script setup>
/**
 * Page Posts Listing
 */
import {useRuntimeConfig} from "nuxt/app";

const runtimeConfig = useRuntimeConfig();
const {data: posts} = await useAsyncData(() => {
  return $fetch(`${runtimeConfig.public.api}/posts?_embed`);
});

// head
useHead({
  title: 'Posts'
});
</script>

<template>
  <PostList :posts="posts"/>
</template>