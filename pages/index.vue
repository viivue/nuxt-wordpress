<script setup>
const siteInfo = useState('siteInfo');

const pageId = siteInfo.value.front_page_id + '';
const apiRequest = `/api/post?id=${pageId}`;

const {data: pageObject} = await useFetch(apiRequest, {key: pageId});
</script>

<template>
  <div>
    <PageDetail :object="pageObject"/>
  </div>
</template>