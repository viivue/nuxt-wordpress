<script setup>
/**
 * Component: <PostDetail/>
 */
import {useFetch, useHead} from "nuxt/app";
import {strippedHtml} from "../../utils/helpers";

// props
const props = defineProps(['postSlug']);

// fetch
const {data: post} = await useFetch(
    `/api/post?slug=${props.postSlug}`,
    {
      key: props.postSlug,
      transform(post){
        post = post[0];
        return {
          title: post.title.rendered,
          content: post.content.rendered,
          excerpt: strippedHtml(post.excerpt.rendered),
          featuredImage: post._embedded ? post._embedded['wp:featuredmedia'][0] : []
        }
      },
    }
);

// head
useHead({
  title: post.value.title,
  meta: [
    {name: 'description', content: post.value.excerpt},
    {property: 'og:description', content: post.value.excerpt},
    {property: 'og:image', content: post.value.featuredImage.source_url},
    {name: "twitter:card", content: 'summary_large_image'}
  ]
});
</script>

<template>
  <div>

    <h1 v-if="post.title">
      <span>{{ post.title }}</span>
      <span v-if="postCat"> - {{ postCat }}</span>
    </h1>

    <img v-if="post.featuredImage"
         class="d-block w100 of-cover ar-169 thumbnail skeleton-bg"
         :src="post.featuredImage.source_url"
         :alt="post.featuredImage.title.rendered"/>

    <div v-if="post.content" v-html="post.content"></div>

  </div>
</template>

<style scoped>

</style>