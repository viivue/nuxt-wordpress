<script setup>
import {MenuItem} from "../objects/menu-item";

const {data: menu} = await useFetch('/api/menus', {
  // transform(data){
  //   const items = [];
  //   for(const item of data){
  //     items.push(new MenuItem(item));
  //   }
  //   console.log(items)
  //
  //   return {
  //     items
  //   };
  // }
});
</script>


<template>
  <div>
    <nuxt-link :to="{name:'index'}">LOGO</nuxt-link>
  </div>
  <div>
    <ul>
      <li v-for="item in menu.items">
        <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>


<style scoped>

</style>