<script setup>
/**
 * Component: <PageDetail/>
 */
import {navigateTo, useFetch, useHead} from "nuxt/app";
import {strippedHtml} from "../../utils/helpers";

// props
const props = defineProps(['pageSlug', 'pageId']);
console.log(`${props.pageId}-${props.pageSlug}`)


// shorthand of useAsyncData()
const {data: page} = await useFetch(
    `/api/pages?id=${props.pageId}&slug=${props.pageSlug}`,
    {
      key: `${props.pageId}-${props.pageSlug}`,
      onResponse({request, response}){
        const is404 = !response._data.length || !response.ok;

        console.log('Shit', is404)
        if(is404){
          // navigateTo({name: '404'});
          // showError({statusCode: 404, statusMessage: 'Page Not Found'});
        }
      },
      transform(page){
        page = page[0];
        //if(!page.length) return false;
        return {
          title: page.title.rendered,
          content: page.content.rendered,
          excerpt: strippedHtml(page.excerpt.rendered),
          featuredImage: page._embedded ? page._embedded['wp:featuredmedia'][0] : []
        }
      },
    }
);

// head
useHead({
  title: page.value.title,
  meta: [
    {name: 'description', content: page.value.excerpt},
    {property: 'og:description', content: page.value.excerpt},
    {property: 'og:image', content: page.value.featuredImage.source_url},
    {name: "twitter:card", content: 'summary_large_image'}
  ]
});
</script>

<template>
  <div v-if="page!==null">
    <pre>{{ page }}</pre>
    <h1 v-if="page.title">
      <span>{{ page.title }}</span>
    </h1>

    <img v-if="page.featuredImage.length"
         class="d-block w100 of-cover ar-169 thumbnail skeleton-bg"
         :src="page.featuredImage.source_url"
         :alt="page.featuredImage.title.rendered"/>

    <div v-if="page.content" v-html="page.content"></div>

  </div>
</template>

<style scoped>

</style>