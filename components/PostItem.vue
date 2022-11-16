<template>
  <li :data-id="post.id">
    <a class="d-block" :href="link">
      <img class="d-block w100 of-cover ar-1 thumbnail skeleton-bg" :src="featuredImage.source_url"
           :alt="featuredImage.title.rendered"/>
      <h3 class="title">{{ post.title.rendered }}</h3>
      <div class="excerpt" v-if="post.excerpt.rendered" v-html="post.excerpt.rendered"/>
    </a>
  </li>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    featuredImage(){
      return this.post._embedded['wp:featuredmedia']['0'];
    },
    link(){
      return `/post/${this.post.id}`;
      //return getURL(this.post.link)
    }
  }
}
</script>

<style scoped>
</style>