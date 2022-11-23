<script setup>/**
 * Catch-all Route
 * @type {any}
 *
 * / => page
 * /post_type => cpt archive
 * /post_type/post_name => cpt single
 */
import {getPathValueFromSlugArray, getPostTypeFromSlugArray} from "../utils/helpers";

const route = useRoute();
const pageSlug = route.params.slug;

const siteInfo = useState("siteInfo");
const postType = getPostTypeFromSlugArray(pageSlug);
const pathValue = getPathValueFromSlugArray(pageSlug);
const path = pageSlug.join('/');
const apiRequest = `/api/post?slug=${pathValue}&post_type=${postType}`;

const {data: pageObject} = await useFetch(apiRequest, {key: path});
</script>

<template>
  <div>
    <div>pageSlug: {{ pageSlug }}</div>
    <pre>{{ apiRequest }}</pre>
    <pre>{{ pageObject }}</pre>
    <!--    <PageDetail :pageSlug="pageSlug"/>-->
  </div>
</template>