<script setup lang="ts">
import { computed } from 'vue';
import { type ICardComponentProps } from './ICardComponentProps';

const props = defineProps<ICardComponentProps>();

const shadowSize = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'shadow-xs';
    case 'sm':
      return 'shadow-sm';
    case 'lg':
      return 'shadow-lg';
    case 'xl':
      return 'shadow-xl';
  }
  return '';
});

const cardSize = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'card-xs';
    case 'sm':
      return 'card-sm';
    case 'lg':
      return 'card-lg';
    case 'xl':
      return 'card-xl';
  }
  return '';
});
</script>
<template>
  <div :class="['card', shadowSize, cardSize]">
    <slot name="image-overlay"></slot>
    <div class="card-body">
      <slot class="card-title" name="card-title"></slot>
      <slot name="card-content"></slot>
      <slot class="card-actions" name="card-actions"></slot>
    </div>
  </div>
</template>
<style scoped></style>
