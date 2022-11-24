<script setup>/**
 * Catch-all Route
 * @type {any}
 *
 * / => page
 * /post_type => cpt archive
 * /post_type/post_name => cpt single
 */
const route = useRoute();
const pageSlug = route.params.slug;

const apiRequest = `/api/post?slug=${pageSlug.join(',')}`;
const key = pageSlug.join('/');

const {data: pageObject} = await useFetch(apiRequest, {key: key});
</script>

<template>
  <div>

    <PageDetail :object="pageObject"/>

    <pre>{{ apiRequest }}</pre>
    <pre>{{ pageObject }}</pre>

  </div>
</template>