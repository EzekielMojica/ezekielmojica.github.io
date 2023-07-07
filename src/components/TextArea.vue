<template>
  <div class="relative mb-6">
    <textarea
      v-bind="$attrs"
      type="text"
      class="w-full px-1 py-1 focus:outline-none peer"
      @focus="focused()"
      @focusout="focusOut()"
      :value="modelValue"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :id="id"
    />
    <label
      ref="inputLabel"
      class="absolute top-1 left-1 text-gray-500 transition-colors duration-300 peer-focus:text-black pointer-events-none"
      :for="id"
    >
      {{ label }}
    </label>
    <div>
      <div ref="highlight" class="absolute w-0 t-0 bg-black h-0.5 z-10"></div>
      <div class="absolute w-full t-0 bg-gray-500 h-0.5"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { ref } from "vue";
import { nanoid } from "nanoid";

const id = nanoid();

const props = defineProps<{
  label: string;
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const highlight = ref<HTMLDivElement>();
const inputLabel = ref<HTMLLabelElement>();

function focused() {
  if (highlight.value) {
    gsap.to(highlight.value, {
      duration: 0.3,
      width: "100%",
      ease: "power2.inOut",
    });
  }
  if (inputLabel.value) {
    gsap.to(inputLabel.value, {
      top: -10,
      duration: 0.3,
      fontSize: 12,
    });
  }
}

function focusOut() {
  if (highlight.value) {
    gsap.to(highlight.value, {
      duration: 0.3,
      width: "0",
      ease: "power2.outIn",
    });
  }
  if (inputLabel.value && !props.modelValue) {
    gsap.to(inputLabel.value, {
      top: 4,
      duration: 0.3,
      fontSize: 16,
    });
  }
}
</script>
