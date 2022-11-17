<script>
import {usePostsStore} from "../store/posts";

export default {
  name: "PostDetail",
  data(){
    return {
      post: {
        type: Object,
      }
    }
  },
  props: {
    postId: {
      type: String || Number,
      required: true
    },
    postCat: {
      type: String
    }
  },
  computed: {
    featuredImage(){
      if(this.post._embedded) return this.post._embedded['wp:featuredmedia']['0'];
    },
  },
  async mounted(){
    const post = await usePostsStore().fetchSinglePost(this.postId);
    this.post = post.data.value;
  },
}
</script>

<template>
  <div>

    <h1 v-if="post.title">
      <span>{{ post.title.rendered }}</span>
      <span v-if="postCat"> - {{ postCat }}</span>
    </h1>

    <img v-if="featuredImage"
         class="d-block w100 of-cover ar-169 thumbnail skeleton-bg"
         :src="featuredImage.source_url"
         :alt="featuredImage.title.rendered"/>

    <div v-if="post.content" v-html="post.content.rendered"></div>

  </div>
</template>

<style scoped>

</style>