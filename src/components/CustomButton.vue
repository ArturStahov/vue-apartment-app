<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
};
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #d16f1f;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #070707;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.4s ease-in;
  &:hover {
    background-color: transparent;
    border: 2px solid #d16f1f;
    color: #d16f1f;
  }
}
</style>
