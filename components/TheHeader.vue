<template>
  <div>
    <nuxt-link :to="{name:'index'}">LOGO</nuxt-link>
  </div>
  <div>
    <ul>
      <li v-for="item in menuItems">
        <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>


<script>
import {useRuntimeConfig} from "nuxt/app";
import axios from "axios";
import {MenuItem} from "../objects/menu-item";

export default {
  name: "TheHeader",
  data(){
    return {
      menuItems: []
    }
  },
  mounted(){
    const runtimeConfig = useRuntimeConfig();

    axios.get(
        `${runtimeConfig.public.apiBaseJson}/custom/menu/location=main-menu`
    ).then(response => {
      for(const item of response.data){
        this.menuItems.push(new MenuItem(item));
      }
    });
  }
}

</script>

<style scoped>

</style>