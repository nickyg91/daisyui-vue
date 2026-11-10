<script setup lang="ts" generic="T">
import { computed, ref, type DeepReadonly } from 'vue';
import type { IMultiselectProps } from './IMultiselectProps';
import { TextInput } from '..';

const props = defineProps<IMultiselectProps<T>>();
const model = defineModel<T[]>();
const filter = ref<string | undefined>();

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
    return val[props.selectOptionValueKey] as unknown;
  }
  return option;
};

const checked = (option: T | DeepReadonly<T>) => {
  const val = getOptionValue(option);
  return !!keyedValues.value.find((x) => x === val);
};

const filteredSet = computed(() => {
  if (!filter.value) {
    return props.items;
  }

  if (props.filterKey) {
    return props.items
      .map((x) => x as Record<string, unknown>)
      .filter((x) => (x[props.filterKey!] as string).indexOf(filter.value!) > -1) as T[];
  }
  return props.items.filter((x) => (x as string).indexOf(filter.value!));
});

const keyedValues = computed(() => {
  return model.value?.map(getOptionValue) ?? [];
});

const onChecked = (item: T, event: Event) => {
  event.stopPropagation();
  if ((event.target as HTMLInputElement).checked) {
    model.value?.push(item);
  } else {
    const idx = keyedValues.value.findIndex((x) => x === item);
    model.value?.splice(idx, 1);
  }
};

const onClicked = (item: T, event: Event) => {
  event.stopPropagation();
  const val = getOptionValue(item);
  if (keyedValues.value.find((x) => x === val)) {
    const idx = keyedValues.value.findIndex((x) => x === val);
    model.value?.splice(idx, 1);
    return;
  }
  model.value?.push(item);
};
</script>

<template>
  <details :class="['calculated-width', 'dropdown', color, size, ghost, invalidClass]">
    <summary class="btn btn-outline justify-between font-normal calculated-width bg-base-100">
      <span id="selected-text">Select Options</span>
      <svg
        xmlns="http://w3.org"
        class="h-4 w-4 opacity-60"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <ul
      id="checkboxes-list"
      class="menu dropdown-content z-1 p-2 shadow-lg bg-base-100 rounded-box mt-1 max-h-60 calculated-width overflow-y-auto border border-base-200"
    >
      <li class="mb-1">
        <TextInput placeholder="Search" v-model="filter"></TextInput>
      </li>
      <li v-if="filteredSet.length === 0">No items found</li>
      <li :key="JSON.stringify(item)" v-for="item in filteredSet">
        <div @click="onClicked(item as T, $event)" class="flex gap-x-2 justify-between">
          <input
            @click="onChecked(item as T, $event)"
            :checked="checked(item)"
            type="checkbox"
            class="checkbox"
          />
          <span>{{ getDisplayOption(item) }}</span>
        </div>
      </li>
    </ul>
  </details>
</template>
<style lang="css" scoped>
.calculated-width {
  width: clamp(3rem, 20rem, 100%);
}
</style>
