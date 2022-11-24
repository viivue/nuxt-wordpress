<script setup>
const siteInfo = useState("siteInfo");
const acfOptions = useState("acfOptions");
</script>

<template>
  <footer v-html="acfOptions.footer_content"></footer>
</template>