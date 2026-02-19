<script setup lang="ts">
import { h, ref, render } from 'vue';
import Button from './button/Button.vue';
import TextInput from './text-input/TextInput.vue';
import SelectList from './select/SelectList.vue';
import CardComponent from './card/CardComponent.vue';
import ToastGroup from './toast/ToastGroup.vue';
import BadgeComponent from './badge/BadgeComponent.vue';
import { useToast } from './toast/composables/useToast';
import ModalComponent from './modal/ModalComponent.vue';
type obj = { id: number; name: string };
const toast = useToast();
const val = ref('test');
const selectedString = ref<string | undefined>();
const stringVals = ref(['test', 'hello', 'hi']);
const selectedObj = ref<obj | undefined>();
const visible = ref(false);
const objVals: obj[] = [
  {
    id: 1,
    name: 'nick',
  },
  {
    id: 2,
    name: 'kelsey',
  },
];
const comp = h(
  'div',
  {
    class: 'flex flex-col gap-y-2',
  },
  [
    'this really is a message',
    h(Button, {
      color: 'warning',
      label: 'ha',
    }),
  ],
);

const onShowToastClicked = () => {
  const color = Math.random() > 0.5 ? 'success' : 'error';
  toast.add({
    title: 'Default Group Toast',
    content: 'This is a toast in the default group',
    color: color,
    duration: 5000,
    soft: true,
  });
};
const secondaryGroupToast = () => {
  toast.add({
    title: 'Secondary Group Toast',
    content: 'This is a toast in the secondary group',
    color: 'info',
    group: 'secondary',
    duration: 5000,
  });
};
</script>

<template>
  <div class="flex flex-col gap-y-5 p-6">
    <div>
      {{ val }}
    </div>
    <div>{{ selectedObj }}</div>
    <div>{{ selectedString }}</div>
    <Button
      class="w-1/6"
      color="success"
      label="Test"
      loading-spinner-type="bars"
      size="xs"
    ></Button>
    <TextInput v-model="val" placeholder="Enter your name" size="lg" />
    <SelectList placeholder="Select a value" v-model="selectedString" :items="stringVals">
    </SelectList>
    <SelectList
      placeholder="Select a value"
      v-model="selectedObj"
      :items="objVals"
      display-name-key="name"
    ></SelectList>
    <CardComponent class="w-1/2" size="lg" shadow-size="xl">
      <template #card-title>
        <h2 class="text-2xl">Title</h2>
      </template>
      <template #card-content>
        <div>some content</div>
      </template>
      <template #card-actions>
        <div class="flex justify-end">
          <Button label="Sure"></Button>
        </div>
      </template>
    </CardComponent>
    <Button
      class="w-1/6"
      color="info"
      label="Default Toast"
      loading-spinner-type="bars"
      size="xs"
      @click="onShowToastClicked"
    ></Button>
    <Button
      class="w-1/6"
      label="Secondary Group Toast"
      loading-spinner-type="bars"
      size="xs"
      @click="secondaryGroupToast"
    ></Button>
    <ToastGroup></ToastGroup>
    <ToastGroup alignment="top" position="end" group-name="secondary"></ToastGroup>
    <BadgeComponent size="lg" soft :color="'error'">
      <template #body> tester </template>
    </BadgeComponent>
    <Button label="Show Modal" @click="visible = !visible"></Button>
    <ModalComponent v-model:visible="visible" title="Test Modal" modal>
      <template #body> hello </template>
      <template #footer>
        <div class="flex justify-end">
          <Button label="Close" @click="visible = false"></Button>
        </div>
      </template>
    </ModalComponent>
  </div>
</template>
