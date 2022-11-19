<script setup>
/**
 * Component <MenuList :location="'main-menu'"/>
 */
const props = defineProps(['location']);

const {data: menu} = await useFetch(`/api/menu?location=${props.location}`, {key: props.location});
</script>

<template>

  <div v-if="!menu.ok"><strong>{{ menu.message }}</strong></div>

  <ul v-if="menu.ok" class="d-flex" style="gap:40px; list-style:none;">
    <MenuItem v-for="item in menu.items" :item="item"/>
  </ul>

</template>