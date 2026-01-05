<script setup lang="ts">
import type { IToastGroupProps } from './IToastGroupProps';

const props = defineProps<IToastGroupProps>();
</script>
<template>
  <Teleport to="body"></Teleport>
</template>
<style scoped></style>
