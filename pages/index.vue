<script setup>
useHead({
  title: 'Home Page 🤿'
});
const siteInfo = useState('siteInfo');
</script>

<template>
  <div>
    <PageDetail :pageId="siteInfo.front_page_id"/>
  </div>
</template>