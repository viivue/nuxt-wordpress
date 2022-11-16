<template>
  <section>
    <h1>Welcome to the homepage</h1>
    <ol>
      <PostItem v-for="post in posts" :post="post"/>
    </ol>
  </section>
</template>


<script>
import PostItem from "../components/PostItem";
import axios from "axios";

export default {
  name: "index",
  components: {PostItem},
  data(){
    return {
      posts: []
    }
  },
  mounted(){
    axios.get(
        `http://localhost/vuefront/wp-json/wp/v2/posts`
    ).then(response => {
      this.posts = response.data
      console.log(this.posts)
    });
  }
}
</script>

<style scoped>

</style>