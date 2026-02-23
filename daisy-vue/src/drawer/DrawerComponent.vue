<script setup lang="ts">
import { computed } from 'vue';
import type { IDrawerProps } from './IDrawerProps';
import Button from '@/button/Button.vue';
const { side, width = 'w-1/3' } = defineProps<IDrawerProps>();
const visible = defineModel<boolean>('visible');
const drawerSide = computed(() => {
  return side === 'left' ? '' : 'drawer-end';
});

const close = () => {
  visible.value = false;
};
</script>

<template>
  <div :class="['drawer', drawerSide]">
    <input :checked="visible" type="checkbox" class="drawer-toggle" />
    <div class="drawer-side">
      <label @click="close" aria-label="close sidebar" class="drawer-overlay"></label>
      <div :class="width" class="bg-base-200 min-h-full flex flex-col p-2">
        <slot name="header">
          <div :class="['flex', side === 'left' ? 'justify-start' : 'justify-end']">
            <Button size="lg" @click="close" circle label="&times;"></Button>
          </div>
        </slot>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
