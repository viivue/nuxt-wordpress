<script setup>
/**
 * Component <MenuList :location="'main-menu'" :menu="menu" :parentId="id"/>
 */
const props = defineProps(['location', 'menu', 'parentId']);

const {data: menuFetched} = props.location ? await useFetch(`/api/menu?location=${props.location}`, {key: props.location}) : {};

const the_menu = computed(() => {
  let result = props.location ? menuFetched.value : props.menu;

  if(props.parentId){
    return {
      ...result,
      filtered: result.items.filter(e => parseInt(e.parent_id) === parseInt(props.parentId))
    };
  }

  return result;
});
</script>

<template>

  <div v-if="!the_menu.ok"><strong>{{ the_menu.message }}</strong></div>

  <ul v-if="the_menu.ok && !parentId" class="d-flex fw-wrap" style="gap:40px; list-style:none;">
    <MenuItem v-for="item in the_menu.items" :item="item" :menu="the_menu"/>
  </ul>

  <ul v-if="the_menu.ok && parentId" class="submenu">
    <MenuItem v-for="item in the_menu.filtered" :item="item" :menu="the_menu" :parentId="parentId"/>
  </ul>


</template>