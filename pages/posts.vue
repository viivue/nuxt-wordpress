<template>
  <ul class="post-list flex-grid-template" style="gap:20px;">
    <PostItem v-for="post in posts" :post="post" :key="post.id"/>
  </ul>
</template>

<script>
import axios from "axios";
import {useRuntimeConfig} from "nuxt/app";

export default {
  name: "post",
  data(){
    return {
      posts: {},
    }
  },
  mounted(){
    const runtimeConfig = useRuntimeConfig();

    axios.get(
        `${runtimeConfig.public.api}/posts?_embed`
    ).then(response => {
      //this.response = response.data;
      this.posts = response.data;
    });
  }
}
</script>

<style scoped>
.post-list {max-width:1024px;}
</style>