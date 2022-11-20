<script setup>/**
 * Component <MenuItem :item="item"/>
 */
const props = defineProps(['item']);

const {data: postObject} = await useFetch(`/api/post-type?id=${props.item.object_id}`, {key: props.item.object_id});

const formattedMenuItem = computed(() => {
  const slug = postObject.value.post_type === 'page' ? '' : `${postObject.value.post_type}/`;

  return {
    ...props.item,
    permalink: `/${slug}${postObject.value.post_name}`
  };
});
</script>


<template>
  <li>
    <nuxt-link :to="formattedMenuItem.permalink" class="btn">{{ formattedMenuItem.title }}</nuxt-link>
  </li>
</template>

<style scoped>

</style>