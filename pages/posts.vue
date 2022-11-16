<template>
  <ol>
    <PostItem v-for="post in posts" :post="post"/>
  </ol>
</template>

<script>
import axios from "axios";
import {useRuntimeConfig} from "nuxt/app";

export default {
  name: "post",
  data(){
    return {
      posts: []
    }
  },
  mounted(){
    const runtimeConfig = useRuntimeConfig();

    axios.get(
        `${runtimeConfig.public.api}/posts`
    ).then(response => {
      this.posts = response.data;
    });
  }
}
</script>

<style scoped>

</style>