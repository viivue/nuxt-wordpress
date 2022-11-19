<script setup>
/**
 * Component: <PostItem/>
 */
const props = defineProps(['post']);

// featuredImage
const featuredImage = computed(() => props.post._embedded ? props.post._embedded['wp:featuredmedia'][0] : {});
const link = computed(() => `/post/${props.post.slug}`);
// todo: fix hard code /post
</script>


<template>
  <li :data-id="post.id">
    <nuxt-link class="d-block" :to="link">
      <img class="d-block w100 of-cover ar-1 thumbnail skeleton-bg" :src="featuredImage.source_url"
           :alt="featuredImage.title.rendered"/>
      <h3 class="title">{{ post.title.rendered }}</h3>
      <div class="excerpt" v-if="post.excerpt.rendered" v-html="post.excerpt.rendered"/>
    </nuxt-link>
  </li>
</template>