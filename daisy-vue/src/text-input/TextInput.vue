<script setup lang="ts">
import { computed } from 'vue';
import type { ITextInputProps } from './ITextInputProps';
const props = defineProps<ITextInputProps>();
defineModel();
const accentColor = computed(() => {
  switch (props.accentColor) {
    case 'primary':
      return 'input-primary';
    case 'secondary':
      return 'input-secondary';
    case 'accent':
      return 'input-accent';
    case 'info':
      return 'input-info';
    case 'success':
      return 'input-success';
    case 'warning':
      return 'input-warning';
    case 'error':
      return 'input-error';
    default:
      return '';
  }
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'input-xs';
    case 'sm':
      return 'input-sm';
    case 'lg':
      return 'input-lg';
    case 'xl':
      return 'input-xl';
    default:
      return '';
  }
});

const invalidClass = computed(() => {
  return props.invalid ? 'input-error' : '';
});

const ghostClass = computed(() => {
  return props.ghost ? 'input-ghost' : '';
});
</script>
<template>
  <input
    :placeholder="placeholder"
    v-model="modelValue"
    type="text"
    :class="['input', accentColor, sizeClass, ghostClass, invalidClass]"
  />
</template>
<style scoped></style>
