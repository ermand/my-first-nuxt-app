<template>
  <section class="container">
    <div>
      <input type="text" v-model="productId">
      <button @click="onLoadProduct">Load product</button>
      <hr>
      <nuxt-child />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productId: ''
    };
  },
  methods: {
    onLoadProduct() {
      return this.$router.push('/products/' + this.productId);
    }
  }
};
</script>