<template>
  <div>
    <select v-on="listeners" name="select" class="select" >
      <option
        v-for="item in formatedItems"
        :key="item.value"
        :value="item.value"
        :selected="item.selected"
        >{{ item.label }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: "customSelect",
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
    formatedItems() {
      return this.items.map((item) =>
        typeof item === "object" ? item : { value: item, label: item }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  height: 40px;
  font-size: 16px;
  outline: none;
  color: #030303;
  font-weight: 600;
  cursor: pointer;
}
</style>
