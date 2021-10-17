<template>
  <div class="chat-wrapper">
    <div class="chat-header">
      <button type="button" class="btn_close"></button>
    </div>
    <div class="chat-body">
      <div class="chat-view"></div>
      <div class="chat-form"></div>
    </div>
    <div class="chat-footer"></div>
  </div>
</template>

<script>
export default {
  name: "Chat",
};
</script>

<style lang="scss" scoped>
.chat-wrapper {
  width: 40%;
  height: 100vh;
  background: rgb(119, 118, 118);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  transform:translateX(-300%);
  visibility:hidden;
  transition:transform 0.4s ease-in-out;
}
</style>
