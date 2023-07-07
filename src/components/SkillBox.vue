<template>
  <div class="border border-black grow lg:max-w-[48%]">
    <div class="font-semibold bg-black text-white text-center py-0.5">
      {{ title }}
    </div>
    <div class="flex flex-wrap justify-center p-2 gap-4">
      <div class="relative" v-for="(item, i) of items" :key="i">
        <img
          v-tooltip="item.alt"
          class="h-16"
          :src="imageUrl(item.imageSrc)"
          :alt="item.alt"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Skill } from "../types";

defineProps<{
  title: string;
  items: Skill[];
}>();

function imageUrl(name: string) {
  return String(new URL(`/src/assets/${name}`, import.meta.url));
}
</script>
