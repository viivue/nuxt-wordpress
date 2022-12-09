<script setup>
/**
 * Component: <PageDetail/>
 */
import {useHead} from "nuxt/app";
import {parseString} from "../../utils/helpers";

const acfOptions = useState("acfOptions");

// props
const props = defineProps(['object']);

// Navigate to 404
if(!props.object || props.object.ok === false) navigateTo({name: 'oops'});

// head
useHead({
  title: props.object.title_seo,
  meta: [
    {name: 'description', content: props.object.excerpt},
    {property: 'og:description', content: props.object.excerpt},
    {property: 'og:image', content: props.object.featured_image.src},
  ]
});

const shortCode = props.object.content_raw;
const finish = parseString(shortCode);
console.log(finish);
</script>

<template>
  <!--  <div>-->

  <!--    <div v-if="object!==null">-->
  <!--      <h1>-->
  <!--        <span>{{ object.title }}</span>-->
  <!--      </h1>-->

  <!--      <img v-if="object.featured_image"-->
  <!--           class="d-block w100 skeleton-bg"-->
  <!--           :src="object.featured_image.src"-->
  <!--           :srcset="object.featured_image.srcset"-->
  <!--           :width="object.featured_image.width"-->
  <!--           :height="object.featured_image.height"-->
  <!--           :alt="object.featured_image.title"/>-->

  <!--      <div v-if="object.content" v-html="object.content"></div>-->

  <!--    </div>-->
  <!--  </div>-->
</template>