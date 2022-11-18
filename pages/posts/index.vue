<script setup>
/**
 * Page Posts Listing
 */
const {data: posts} = await useAsyncData(() => {
  return $fetch(`/api/posts`);
});

// head
useHead({
  title: 'Posts'
});
</script>

<template>
  <PostList :posts="posts"/>
</template>