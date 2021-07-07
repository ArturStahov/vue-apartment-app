<template>
  <section>
    <slot name="title">Default title</slot>
    <div class="apartment-list">
      <AppartmentsItem
        v-for="{ _id, raiting, price, description, image, city,title } in items"
        :key="_id"
        :id="_id"
        :raiting="raiting"
        :price="price"
        :descr="description"
        :photoSrc="image"
        :city="city"
        :title="title"
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
   gap:20px;
}
.aprtments-list_item {
  border: 3px solid #ececec;
  border-radius: 5px;
}
</style>
