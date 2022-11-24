<script setup>
const siteInfo = useState('siteInfo');

const front_page_id = siteInfo.value.front_page_id;
const apiRequest = `/api/post?id=${front_page_id}`;

const {data: pageObject} = await useFetch(apiRequest, {key: front_page_id});
</script>

<template>
  <div>
    <PageDetail :object="pageObject"/>
  </div>
</template>