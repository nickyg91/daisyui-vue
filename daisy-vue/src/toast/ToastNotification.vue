<script setup lang="ts">
import { computed } from 'vue';
import type { IToastNotificationProps } from './IToastNotificationProps';

const props = defineProps<IToastNotificationProps>();

const toastColor = computed(() => {
  switch (props.color) {
    case 'accent':
      return 'alert-accent';
    case 'error':
      return 'alert-error';
    case 'info':
      return 'alert-info';
    case 'secondary':
      return 'alert-secondary';
    case 'success':
      return 'alert-success';
    case 'warning':
      return 'alert-warning';
  }
  return 'alert-primary';
});

const isVnode = computed(() => {
  return typeof props.content === 'object';
});
</script>
<template>
  <div :class="['min-w-1/12']">
    <div class="flex flex-col justify-start gap-y-2" :class="['alert', toastColor]">
      <div class="w-full">
        <p v-if="title" class="text-lg">
          {{ title }}
        </p>
      </div>
      <div class="w-full" v-if="isVnode">
        <component :is="content"></component>
      </div>
      <div class="w-full" v-else>
        {{ content }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
