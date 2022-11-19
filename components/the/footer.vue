<script setup>
const siteInfo = useState("siteInfo");
</script>

<template>
  <div class="site-footer ta-center">
    ViiVue | {{ siteInfo.name }} | {{ siteInfo.description }}
  </div>
</template>

<style scoped>
.site-footer {
  padding:20px;
}
</style>