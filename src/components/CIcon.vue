<template>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    class="inline"
    :height="size"
    :width="size"
  >
    <path :d="icons[mdIcon]"></path>
  </svg>
</template>
<script lang="ts" setup>
import * as icons from "@mdi/js";
import { camelize, computed } from "vue";

type IconsType = typeof icons;

const props = defineProps({
  icon: {
    type: String,
    required: true,
    validator: (val: string) => {
      return camelize(val) in icons;
    },
  },
  size: {
    type: Number,
    default: 24,
  },
});

const mdIcon = computed(() => {
  return camelize(props.icon) as keyof IconsType;
});
</script>
