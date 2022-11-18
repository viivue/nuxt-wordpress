<script>
import {usePostsStore} from "../../store/posts";

export default {
  name: "post",
  head(){
    return {
      title: 'Posts'
    }
  },
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


<template>
  <ul v-if="posts && posts.length" class="post-list flex-grid-template" style="gap:20px;">
    <PostItem v-for="post in posts" :post="post" :key="post.id"/>
  </ul>
</template>


<style scoped>
.post-list {max-width:1024px;}
</style>