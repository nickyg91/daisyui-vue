<script setup lang="ts">
import { ref } from 'vue';
import Button from './button/Button.vue';
import TextInput from './text-input/TextInput.vue';
const val = ref('test');
</script>

<template>
  <Button color="success" loading loading-spinner-type="bars" size="xl"></Button>
  <TextInput v-model="val" placeholder="Enter your name" size="lg" />
</template>
