<script setup lang="ts">
import { computed } from 'vue';
import type { IButtonProps } from './IButtonProps';

const buttonProps = defineProps<IButtonProps>();

const colorVariant = computed(() => {
  switch (buttonProps.color) {
    case 'primary':
      return 'btn-primary';
    case 'secondary':
      return 'btn-secondary';
    case 'accent':
      return 'btn-accent';
    case 'info':
      return 'btn-info';
    case 'success':
      return 'btn-success';
    case 'warning':
      return 'btn-warning';
    case 'error':
      return 'btn-error';
    default:
      return '';
  }
});

const loadingSpinnerType = computed(() => {
  switch (buttonProps.loadingSpinnerType) {
    case 'spinner':
      return 'loading-spinner';
    case 'dots':
      return 'loading-dots';
    case 'ring':
      return 'loading-ring';
    case 'ball':
      return 'loading-ball';
    default:
      return 'loading-spinner';
  }
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
  switch (buttonProps.size) {
    case 'xs':
      return 'btn-xs';
    case 'sm':
      return 'btn-sm';
    case 'lg':
      return 'btn-lg';
    case 'xl':
      return 'btn-xl';
    default:
      return 'btn-md';
  }
});
</script>

<template>
  <button :disabled="disabled" :class="['btn', colorVariant, ...buttonType, buttonSize]">
    <slot name="icon"></slot>
    <span
      v-if="loading && (loadingPosition === 'left' || !loadingPosition)"
      class="loading"
      :class="loadingSpinnerType"
    ></span>
    {{ label }}
    <span
      v-if="loading && loadingPosition === 'right'"
      class="loading"
      :class="loadingSpinnerType"
    ></span>
  </button>
</template>
