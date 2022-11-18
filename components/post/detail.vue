<script setup>
/**
 * Component: <PostDetail/>
 */
import {useAsyncData, useRuntimeConfig} from "nuxt/app";

const runtimeConfig = useRuntimeConfig();

// props
const props = defineProps(['postId', 'postCat']);

// post
const {data: post} = await useAsyncData(props.postId, () => {
  return $fetch(`${runtimeConfig.public.api}/posts/${props.postId}/?_embed`);
});

// featuredImage
const featuredImage = computed(() => post.value._embedded ? post.value._embedded['wp:featuredmedia'][0] : {});
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