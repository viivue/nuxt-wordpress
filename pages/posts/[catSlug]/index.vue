<script setup>
const route = useRoute();
const postId = route.params.postId;
const catSlug = route.params.catSlug;

// single post on category page
const hasNoPostId = typeof postId === 'undefined';
const catSlugIsNumber = !isNaN(parseInt(catSlug));
const isSinglePost = hasNoPostId && catSlugIsNumber;

// navigation to posts page
if(!isSinglePost){
  navigateTo('/posts');
}
</script>


<template>

  <PostDetail v-if="isSinglePost" :postId="catSlug"/>

</template>

<style scoped>

</style>