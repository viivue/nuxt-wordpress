<script setup>
/**
 * Component: <PostList/>
 */
const props = defineProps(['posts']);
</script>


<template>
  <ul v-if="posts && posts.length" class="post-list flex-grid-template" style="gap:20px;">
    <PostItem v-for="post in posts" :post="post" :key="post.id"/>
  </ul>
</template>

<style scoped>
.post-list {max-width:1024px;}
</style>