<script setup lang="ts">
import { ref } from 'vue';
import Button from './button/Button.vue';
import TextInput from './text-input/TextInput.vue';
import SelectList from './select/SelectList.vue';
import CardComponent from './card/CardComponent.vue';
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
  </div>
</template>
