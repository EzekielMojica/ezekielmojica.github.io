<template>
  <svg
    :style="{ width: width + 'px' }"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 150 250"
  >
    <polygon
      points="150,0 0,0 0,250 150,250 150,200 50,200 50,150 100,100 50,100 50,50 150,50"
      style="fill: white"
    />
    <polygon points="150,150 150,100 100,150" style="fill: white" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 20,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>