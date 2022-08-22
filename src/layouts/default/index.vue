<template>
  <!-- 顶部安全区 -->
  <div class="van-safe-area-top"></div>

  <RouterView>
    <template #default="{ Component, route }">
      <component :is="Component" :key="route.fullPath" />
    </template>
  </RouterView>

  <!-- 底部安全区 -->
  <div class="van-safe-area-bottom"></div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'DefaultLayout',
    setup() {},
  });
</script>
