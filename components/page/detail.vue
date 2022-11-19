<script setup>
/**
 * Component: <PageDetail/>
 */
import {navigateTo, useFetch, useHead} from "nuxt/app";
import {strippedHtml} from "../../utils/helpers";

// props
const props = defineProps(['pageSlug', 'pageId']);

// fetch
const {data: page} = await useFetch(
    `/api/page?id=${props.pageId}&slug=${props.pageSlug}`,
    {
      key: `${props.pageId}-${props.pageSlug}`,
      transform(page){
        page = page[0];
        return {
          title: page.title.rendered,
          content: page.content.rendered,
          excerpt: strippedHtml(page.excerpt.rendered),
          featuredImage: page._embedded ? page._embedded['wp:featuredmedia'][0] : []
        }
      },
    }
);

// Navigate to 404
if(!page.value) navigateTo({name: '404-page'});

</script>

<template>
  <div>

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
  </div>
</template>