<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { IToastGroupProps } from './IToastGroupProps';
import type { IToastNotification } from './IToastNotification';
import ToastNotification from './ToastNotification.vue';
import ToastEventBus from './ToastEventBus';
const toasts = ref<IToastNotification[]>([]);
const props = defineProps<IToastGroupProps>();
onMounted(() => {
  const groupName = props.groupName ?? 'default';
  ToastEventBus.on('add', (toast: IToastNotification) => {
    toastEventHandler(toast, groupName);
  });
});

const toastEventHandler = (toast: IToastNotification, groupName: string) => {
  if ((toast.group ?? 'default') === groupName) {
    toasts.value.push(toast);
    setTimeout(() => {
      const index = toasts.value.findIndex((t) => t.id === toast.id);
      if (index !== -1) {
        toasts.value.splice(index, 1);
      }
    }, toast.duration || 3000);
  }
};

const toastPosition = computed(() => {
  switch (props.position) {
    case 'center':
      return 'toast-center';
    case 'end':
      return 'toast-end';
    case 'start':
      return 'toast-start';
  }
  return 'toast-end';
});

const toastAlignment = computed(() => {
  switch (props.alignment) {
    case 'bottom':
      return 'toast-bottom';
    case 'top':
      return 'toast-top';
    case 'middle':
      return 'toast-middle';
  }
  return 'toast-bottom';
});
</script>
<template>
  <Teleport to="body">
    <div :class="['toast', toastPosition, toastAlignment]">
      <TransitionGroup name="fade" mode="out-in" tag="div">
        <ToastNotification
          :content="toast.color"
          :color="toast.color"
          :title="toast.title"
          :key="toast.id"
          :soft="toast.soft"
          v-for="toast in toasts"
          class="mb-2"
        ></ToastNotification>
      </TransitionGroup>
    </div>
  </Teleport>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
