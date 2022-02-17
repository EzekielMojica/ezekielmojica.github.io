<template>
  <nav
    v-scroll="test"
    class="
      fixed
      w-full
      transition-colors
      ease-out-in
      duration-500
      flex
      justify-center
      items-center
    "
    :class="scroll >= 1 ? 'bg-black' : 'bg-transparent'"
  >
    <div class="flex relative h-16 items-center justify-between w-full mx-16">
      <!-- Logo slot  -->
      <div class="text-4xl text-white flex items-center">
        <logo class="mr-1" />
        <span>zekiel</span>
      </div>
      <!-- Nav items slot  -->
      <div
        class="text-white text-xl justify-center items-center flex space-x-6"
      >
        <ul class="flex space-x-6">
          <li>Experience</li>
          <li>Works</li>
          <li>Skills</li>
        </ul>
        <!-- Icons -->
        <div class="flex items items-center justify-center space-x-4">
          <c-icon>mdi-github</c-icon>
          <c-icon>mdi-linkedin</c-icon>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import CIcon from "./reusables/CIcon.vue";
import Logo from "./reusables/Logo.vue";
export default {
  components: { Logo, CIcon },
  data() {
    return {
      scroll: 0,
    };
  },
  methods: {
    test(e) {
      this.scroll = window.scrollY;
    },
  },
};
</script>

<style lang=scss scoped>
</style>