<script setup>/**
 * Catch-all Route
 * @type {any}
 *
 * / => page
 * /post_type => cpt archive
 * /post_type/post_name => cpt single
 */
import {getPostTypeFromSlugArray} from "../utils/helpers";

const route = useRoute();
const pageSlug = route.params.slug;

const siteInfo = useState("siteInfo");
const postType = getPostTypeFromSlugArray(pageSlug);

</script>

<template>
  <div>
    <div>pageSlug: {{ pageSlug }}</div>
    <pre>{{ postType }}</pre>
    <!--    <PageDetail :pageSlug="pageSlug"/>-->
  </div>
</template>