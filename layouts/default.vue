<template>
  <div class="site-wrapper d-flex fd-column jc-space-between">

    <TheHeader/>

    <div class="container ml-auto mr-auto">
      <slot/>
    </div>

    <TheFooter/>

  </div>
</template>

<style>
.site-wrapper {
  min-height:100vh;
}
</style>