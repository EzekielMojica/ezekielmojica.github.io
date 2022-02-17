<template>
  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
    <path fill="currentColor" :d="icon" />
    <slot class="hidden"></slot>
  </svg>
</template>

<script>
import { mdiGithub, mdiLinkedin } from "@mdi/js";
export default {
  data() {
    return {
      icons: { mdiGithub, mdiLinkedin },
    };
  },
  methods: {
    toCamelCase(kebab) {
      let textArr = kebab.split("-");
      for (let i = 1; i < textArr.length; i++) {
        textArr[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1);
      }
      return textArr.join("");
    },
  },
  computed: {
    icon() {
      if (this.$slots.default[0].text) {
        let icon = this.toCamelCase(this.$slots.default[0].text);
        if (this.icons[icon]) {
          return this.icons[icon];
        } else {
          console.error(
            "Icon didn't exist please check the icon name or import the icon"
          );
        }
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>