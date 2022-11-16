<template>
  <ol>
    <PostItem v-for="post in posts" :post="post"/>
  </ol>
</template>

<script>
import axios from "axios";

export default {
  name: "post",
  data(){
    return {
      posts: []
    }
  },
  mounted(){
    axios.get(
        `https://dev.mochisandbox.com/wordpress-vue/wp-json/wp/v2/posts`
    ).then(response => {
      this.posts = response.data
      console.table(this.posts)
    });
  }
}
</script>

<style scoped>

</style>