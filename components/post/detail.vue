<script setup>
/**
 * Component: <PostDetail/>
 */
import {useFetch, useRuntimeConfig} from "nuxt/app";

const runtimeConfig = useRuntimeConfig();

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
    `${runtimeConfig.public.api}/posts/${props.postId}/?_embed`,
    {
      key: props.postId,
      pick: ['title', 'content', '_embedded'],
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