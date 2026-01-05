<script setup lang="ts">
import { ref } from 'vue';
import Button from './button/Button.vue';
import TextInput from './text-input/TextInput.vue';
import SelectList from './select/SelectList.vue';
type obj = { id: number; name: string };
const val = ref('test');
const selectedString = ref<string | undefined>();
const stringVals = ref(['test', 'hello', 'hi']);
const selectedObj = ref<obj | undefined>();
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
    <SelectList v-model="selectedString" :items="stringVals"></SelectList>
    <SelectList v-model="selectedObj" :items="objVals" display-name-key="name"></SelectList>
  </div>
</template>
