<script setup>
const siteInfo = useState('siteInfo');

const pageId = siteInfo.value.page_404_id + '';
const apiRequest = `/api/post?id=${pageId}`;

const {data: pageObject} = await useFetch(apiRequest, {key: pageId});
</script>

<template>
  <div>
    <PageDetail :object="pageObject"/>
  </div>
</template>