<template>

  <h1 v-if="post.title">{{ post.title.rendered }}</h1>

  <img v-if="featuredImage"
       class="d-block w100 of-cover ar-169 thumbnail skeleton-bg"
       :src="featuredImage.source_url"
       :alt="featuredImage.title.rendered"/>

  <div v-if="post.content" v-html="post.content.rendered"></div>

</template>

<script>
import {useRoute, useRuntimeConfig} from "nuxt/app";
import axios from "axios";

export default {
  name: "[id]",
  data(){
    return {
      post: {}
    }
  },
  computed: {
    featuredImage(){
      if(this.post._embedded) return this.post._embedded['wp:featuredmedia']['0'];
    },
  },
  mounted(){
    const route = useRoute();
    const id = route.params.id;

    const runtimeConfig = useRuntimeConfig();

    axios.get(
        `${runtimeConfig.public.api}/posts/${id}/?_embed`
    ).then(response => {
      this.post = response.data;
    });
  }
}
</script>

<style scoped>

</style>