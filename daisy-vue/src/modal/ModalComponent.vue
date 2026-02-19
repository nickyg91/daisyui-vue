<script setup lang="ts">
import Button from '@/button/Button.vue';
import type { IModalProps } from './IModalProps';
import { onMounted, ref, watch } from 'vue';

const { modal = false, title } = defineProps<IModalProps>();
const emits = defineEmits<{ (e: 'on:closed'): void }>();
const visible = defineModel<boolean>('visible');
const dialogRef = ref<HTMLDialogElement | null>(null);

onMounted(() => {
  if (visible.value && dialogRef.value) {
    if (modal) {
      dialogRef.value.showModal();
    } else {
      dialogRef.value.show();
    }
  }
});

watch(visible, (newVal) => {
  if (dialogRef.value) {
    if (newVal) {
      if (modal) {
        dialogRef.value?.showModal();
      } else {
        dialogRef.value?.show();
      }
    } else {
      dialogRef.value?.close();
      emits('on:closed');
    }
  }
});
</script>
<template>
  <Teleport to="body">
    <dialog class="modal" ref="dialogRef">
      <div class="modal-box">
        <slot name="header">
          <div class="flex justify-between">
            <p class="text-lg">{{ title }}</p>
            <Button
              label="x"
              variant="ghost"
              size="sm"
              class="btn-circle btn-sm"
              @click="visible = false"
            >
            </Button>
          </div>
        </slot>
        <slot name="body"></slot>
        <slot class="modal-action" name="footer"></slot>
      </div>
    </dialog>
    <form v-if="!modal" method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </Teleport>
</template>
<style scoped></style>
