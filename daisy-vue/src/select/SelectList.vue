<script setup lang="ts" generic="T">
import { computed, type DeepReadonly } from 'vue';
import type { ISelectListProps } from './ISelectListProps';

const props = defineProps<ISelectListProps<T>>();
const model = defineModel<T | DeepReadonly<T>>();

const color = computed(() => {
  switch (props.accentColor) {
    case 'primary':
      return 'select-primary';
    case 'secondary':
      return 'select-secondary';
    case 'accent':
      return 'select-accent';
    case 'info':
      return 'select-info';
    case 'success':
      return 'select-success';
    case 'warning':
      return 'select-warning';
    case 'error':
      return 'select-error';
    default:
      return '';
  }
});

const size = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'select-xs';
    case 'sm':
      return 'select-sm';
    case 'lg':
      return 'select-lg';
    case 'xl':
      return 'select-xl';
    default:
      return '';
  }
});

const ghost = computed(() => (props.ghost ? 'select-ghost' : ''));

const invalidClass = computed(() => {
  return props.invalid ? 'select-error' : '';
});

const isSelected = (value: T | DeepReadonly<T>) => {
  if (typeof value === 'object' && props.selectOptionValueKey) {
    const val = value as Record<string, unknown>;
    return val[props.selectOptionValueKey] === value;
  }
  return model === value;
};

const getDisplayOption = (option: T | DeepReadonly<T>) => {
  if (typeof option === 'object' && props.displayNameKey) {
    const val = option as Record<string, unknown>;
    return val[props.displayNameKey] as string;
  }
  return option;
};

const getOptionValue = (option: T | DeepReadonly<T>) => {
  if (typeof option === 'object' && props.selectOptionValueKey) {
    const val = option as Record<string, unknown>;
    return val[props.selectOptionValueKey] as string;
  }
  return option;
};
</script>
<template>
  <select v-model="model" :class="['select', color, size, ghost, invalidClass]">
    <option v-if="placeholder" disabled selected>{{ placeholder }}</option>
    <option
      v-for="(option, index) in items"
      :key="JSON.stringify(option)"
      :value="getOptionValue(option)"
      :selected="isSelected(option)"
    >
      <slot name="option" :option="option"></slot>
      <slot v-if="!$slots.option">
        {{ getDisplayOption(option) }}
      </slot>
    </option>
  </select>
</template>

<style scoped></style>
