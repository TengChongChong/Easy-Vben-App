<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import { useTitle } from '@/hooks/web/useTitle';

  useTitle();
</script>

<template>
  <router-view />
</template>
