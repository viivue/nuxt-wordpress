<template>
  <li :data-id="post.id">
        <pre>
          {{ post }}
        </pre>
    <h3>{{ post.title.rendered }}</h3>
    <div v-html="post.excerpt.rendered"/>
  </li>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>