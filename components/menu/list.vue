<script setup>/**
 * Component <MenuList :location="'main-menu'" :menu="menu" :parentId="id"/>
 */
const props = defineProps(['location', 'menu', 'parentId']);

const {data: menuFetched} = await useFetch(`/api/menu?location=${props.location}`, {key: props.location});

const menu_final = computed(() => {
  let result = props.location ? menuFetched.value : props.menu;

  if(props.parentId){
    return {
      ...result,
      items: result.items.filter(e => parseInt(e.parent_id) === parseInt(props.parentId))
    };
  }

  return result;
});
</script>

<template>

  <div v-if="!menu_final.ok"><strong>{{ menu_final.message }}</strong></div>


  <ul v-if="menu_final.ok && !parentId" class="d-flex fw-wrap" style="gap:40px; list-style:none;">
    <MenuItem v-for="item in menu_final.items" :item="item" :menu="menu_final"/>
  </ul>


  <ul v-if="menu_final.ok && parentId" class="submenu" style="gap:40px; list-style:none;">
    <MenuItem v-if="parentId" v-for="item in menu_final.items" :item="item" :parentId="parentId"/>
  </ul>


</template>