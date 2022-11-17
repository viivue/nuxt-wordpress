<template>
  <ul class="post-list flex-grid-template" style="gap:20px;">
    <PostItem v-if="posts.length" v-for="post in posts" :post="post" :key="post.id"/>
  </ul>
</template>

<script>
import {usePostsStore} from "../store/posts";

export default {
  name: "post",
  data(){
    return {
      posts: [],
    }
  },
  async mounted(){
    const {data: posts} = await usePostsStore().fetchPosts()
    this.posts = posts.value;
  }
}
</script>

<style scoped>
.post-list {max-width:1024px;}
</style>