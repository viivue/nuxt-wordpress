<script setup>
/**
 * Router: Single Post => /post/post-name
 * @type {any}
 */
const route = useRoute();
const postSlug = route.params.postSlug;
</script>


<template>
  <PostDetail :postSlug="postSlug"/>
</template>