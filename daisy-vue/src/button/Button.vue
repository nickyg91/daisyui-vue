<script setup lang="ts">
import { computed } from 'vue';
import type { IButtonProps } from './IButtonProps';

const buttonProps = defineProps<IButtonProps>();

const colorVariant = computed(() => {
  return `btn-${buttonProps.color || 'primary'}`;
});

const loadingSpinnerType = computed(() => {
  return `loading-${buttonProps.loadingSpinnerType || 'spinner'}`;
});

const buttonType = computed(() => {
  const classes = [];
  if (buttonProps.dash) {
    classes.push('btn-dash');
  }
  if (buttonProps.outline) {
    classes.push('btn-outline');
  }
  if (buttonProps.ghost) {
    classes.push('btn-ghost');
  }
  if (buttonProps.link) {
    classes.push('btn-link');
  }
  if (buttonProps.circle) {
    classes.push('btn-circle');
  }
  if (buttonProps.square) {
    classes.push('btn-square');
  }
  return classes;
});

const buttonSize = computed(() => {
  return buttonProps.size ? `btn-${buttonProps.size}` : '';
});
</script>

<template>
  <button :disabled="disabled" :class="['btn', colorVariant, ...buttonType, buttonSize]">
    <span
      v-if="loading && loadingPosition === 'left'"
      class="loading"
      :class="loadingSpinnerType"
    ></span>
    {{ label }}
  </button>
</template>
