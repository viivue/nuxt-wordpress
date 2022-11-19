<script setup>
const route = useRoute();
const pageSlug = route.params.pageSlug;
</script>

<template>
  <div>
    <PageDetail :pageSlug="pageSlug"/>
  </div>
</template>