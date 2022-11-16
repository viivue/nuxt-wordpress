<template>
  <div>
    <ul>
      <li v-for="item in menuItems">
        <a :href="item.url">{{ item.title }}</a>
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
      console.log(response.data)
      for(const item of response.data){
        this.menuItems.push(new MenuItem(item));
      }
      console.log(this.menuItems)
    });
  }
}

</script>

<style scoped>

</style>