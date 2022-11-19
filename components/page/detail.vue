<script setup>
/**
 * Component: <PageDetail/>
 */
import {navigateTo, useFetch, useHead} from "nuxt/app";
import {strippedHtml} from "../../utils/helpers";

// props
const props = defineProps(['pageSlug', 'pageId']);

const requestURL = props.pageId ? `id=${props.pageId}` : `slug=${props.pageSlug}`;

// fetch
const {data: page} = await useFetch(
    `/api/page?${requestURL}`,
    {
      key: `${props.pageId}-${props.pageSlug}`,
      transform(page){
        page = !!page.id === false ? page[0] : page;

        return {
          title: page.title.rendered,
          content: page.content.rendered,
          excerpt: strippedHtml(page.excerpt.rendered),
          featuredImage: !!page._embedded['wp:featuredmedia'] === false ? false : page._embedded['wp:featuredmedia'][0]
        }
      },
    }
);

// Navigate to 404
if(!page.value) navigateTo({name: '404-page'});

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
  <div>

    <div v-if="page!==null">
      <pre>{{ page }}</pre>
      <h1 v-if="page.title">
        <span>{{ page.title }}</span>
      </h1>

      <img v-if="page.featuredImage"
           class="d-block w100 of-cover ar-169 thumbnail skeleton-bg"
           :src="page.featuredImage.source_url"
           :alt="page.featuredImage.title.rendered"/>

      <div v-if="page.content" v-html="page.content"></div>

    </div>
  </div>
</template>