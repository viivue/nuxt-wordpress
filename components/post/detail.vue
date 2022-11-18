<script setup>
/**
 * Component: <PostDetail/>
 */
import {useFetch, useHead} from "nuxt/app";
import {strippedHtml} from "../../utils/helpers";

// props
const props = defineProps(['postId', 'postCat']);

// post
// const {data: post} = await useAsyncData(
//     props.postId,
//     () => {
//       return $fetch(`${runtimeConfig.public.api}/posts/${props.postId}/?_embed`);
//     },
//     {
//       pick: ['title', 'content', '_embedded']
//     }
// );

// shorthand of useAsyncData()
const {data: post} = await useFetch(
    `/api/posts?id=${props.postId}`,
    {
      key: props.postId,
      //pick: ['title', 'content', '_embedded'],
      transform(post){
        return {
          title: post.title.rendered,
          content: post.content.rendered,
          excerpt: strippedHtml(post.excerpt.rendered),
          featuredImage: post._embedded ? post._embedded['wp:featuredmedia'][0] : []
        }
      },
      onResponse({request, response}){
        if(!response.ok){
          navigateTo({name: '404'});
          //showError({statusCode: 404, statusMessage: 'Page Not Found'});
        }
      },
      onResponseError(ctx){
      }
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