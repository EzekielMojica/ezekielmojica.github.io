<template>
  <div class="lg:w-[768px] mx-auto mb-12">
    <h4
      class="text-xl md:text-2xl lg:text-3xl mb-6 font-semibold !leading-tight text-center"
    >
      {{ title }}
    </h4>
    <p class="text-lg text-justify pb-3">
      {{ description }}
    </p>
    <p class="text-lg text-justify pb-3">
      <b>Technologies:</b> {{ technologies }}
    </p>
    <div class="flex gap-4">
      <slot name="actions"></slot>
      <!-- <CButton>
        <CIcon icon="mdi-open-in-new"></CIcon>
        Demo
      </CButton>
      <CButton>
        <CIcon icon="mdi-github"></CIcon>
        Github
      </CButton> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from "../types";

// import CButton from "./CButton.vue";
// import CIcon from "./CIcon.vue";

defineProps<Project>();
</script>
