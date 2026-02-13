<script setup lang="ts">
import { computed } from 'vue';
import type { IBadgeProperties } from './IBadgeProperties';

const { color = 'primary', size = 'badge-md', soft, value } = defineProps<IBadgeProperties>();

const colorVariant = computed(() => {
  switch (color) {
    case 'primary':
      return 'badge-primary';
    case 'secondary':
      return 'badge-secondary';
    case 'accent':
      return 'badge-accent';
    case 'info':
      return 'badge-info';
    case 'success':
      return 'badge-success';
    case 'warning':
      return 'badge-warning';
    case 'error':
      return 'badge-error';
    default:
      return '';
  }
});

const sizeVariant = computed(() => {
  switch (size) {
    case 'sm':
      return 'badge-sm';
    case 'lg':
      return 'badge-lg';
    case 'xl':
      return 'badge-xl';
    default:
      return 'badge-md';
  }
});

const isSoft = computed(() => {
  return soft ? 'badge-soft' : '';
});
</script>
<template>
  <div :class="['badge', sizeVariant, colorVariant, isSoft]">
    <slot default>
      <span v-if="value">
        {{ value }}
      </span>
    </slot>
    <slot name="body"></slot>
  </div>
</template>

<style lang="css" scoped></style>
