<script setup>
/**
 * Component <MenuItem :item="item" :menu="menu" :parentId="parentId"/>
 */
const props = defineProps(['item', 'menu', 'parentId']);
</script>

<template>
  <li v-if="!item.is_child || parentId">
    <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>

    <MenuList v-if="item.is_parent && menu" :menu="menu" :parentId="item.id"/>
  </li>
</template>