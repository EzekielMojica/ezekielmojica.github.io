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
      <div class="text-4xl text-white">Ezekiel Mojica</div>
      <!-- Nav items slot  -->
      <div class="text-white text-xl justify-center items-center flex">
        <ul class="flex space-x-10">
          <li>Experience</li>
          <li>Works</li>
          <li>Skills</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
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