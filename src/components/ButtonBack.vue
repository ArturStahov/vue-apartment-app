<template>
  <router-link :to="{ name: 'contentPage' }">
    <svg
      class="button-icon"
      version="1.1"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>button back</title>
      <path
        d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"
      ></path>
      <path
        d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"
      ></path>
    </svg>
  </router-link>
</template>

<script>
export default {
  name: "ButtonBack",
};
</script>

<style lang="scss" scoped>
.button-icon {
  width: 35px;
  height: 35px;
  fill: #fff;
  transition: fill 0.4s ease-in;
  &:hover {
    fill: rgb(238, 160, 15);
  }
}
</style>