<template>

  <h1 v-if="post.title">{{ post.title.rendered }}</h1>

  <img v-if="featuredImage"
       class="d-block w100 of-cover ar-169 thumbnail skeleton-bg"
       :src="featuredImage.source_url"
       :alt="featuredImage.title.rendered"/>

  <div v-if="post.content" v-html="post.content.rendered"></div>

</template>

<script>
import {useRoute} from "nuxt/app";
import {usePostsStore} from "../../store/posts";

export default {
  name: "[id]",
  head(){
    return {
      title: this.post ? this.post.title.rendered : 'Detail'
    }
  },
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
  async mounted(){
    console.log('mounted')
    const route = useRoute();
    const id = route.params.id;
    const post = await usePostsStore().fetchSinglePost(id);
    this.post = post.data.value;
  },
}
</script>


<style scoped>

</style>