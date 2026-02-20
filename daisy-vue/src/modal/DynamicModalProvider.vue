<script setup lang="ts">
import { inject } from 'vue';
import { DYNAMIC_MODAL_INJECTION_KEY, useDynamicModalService } from './useDynamicModalService';

const dialogService = inject<ReturnType<typeof useDynamicModalService>>(
  DYNAMIC_MODAL_INJECTION_KEY,
);

if (!dialogService) {
  throw new Error(
    'DynamicModalProvider: dialogService not provided. Make sure you are installing the plugin.',
  );
}
</script>

<template>
  <div v-for="[key, dialog] of dialogService.openDialogs.value" :key="key">
    <component :is="dialog" />
  </div>
</template>
<style scoped></style>
