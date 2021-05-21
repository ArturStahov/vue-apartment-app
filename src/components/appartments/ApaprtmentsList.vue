<template>
  <section>
    <slot name="title">Default title</slot>
    <div class="apartment-list">
      <AppartmentsItem
        v-for="{ id, raiting, price, descr, photoSrc, city } in items"
        :key="id"
        :id="id"
        :raiting="raiting"
        :price="price"
        :descr="descr"
        :photoSrc="photoSrc"
        :city="city"
        class="aprtments-list_item"
      />
    </div>
  </section>
</template>

<script>
import AppartmentsItem from "./AppartmentsItem";
export default {
  name: "ApartmentsList",
  components: {
    AppartmentsItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.aprtments-list_item {
  margin-bottom: 30px;
  &:nth-child(odd) {
    margin-right: 30px;
  }
}
</style>
