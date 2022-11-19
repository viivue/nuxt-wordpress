<script setup>
const route = useRoute();
const postId = route.params.postId;
const catSlug = route.params.catSlug;
</script>


<template>

  <PostDetail :postId="postId" :postCat="catSlug"/>

</template>


<style scoped>
</style>