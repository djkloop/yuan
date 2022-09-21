<template>
  <YuanBasicLayout>
    <RouterView />
  </YuanBasicLayout>
</template>

<script setup lang="ts">
import YuanBasicLayout from '@/components/YuanLayout/YuanLayout';

</script>
<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}
</style>
