<template>
  <div class="app-logo">
    <img src="../../assets/images/logo.png" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AppLogo',
  });
</script>

<style lang="less" scoped>
  .app-logo {
    margin-bottom: 40px;

    img {
      display: block;
      width: 100px;
      height: auto;
      margin: 0 auto;
    }
  }
</style>
