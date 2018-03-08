<template>
  <section class="container">
    <div>
      <input type="text" v-model="userId">
      <button @click="onLoadUser">Load User</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
      return {
          userId: ''
      }
  },
  methods: {
      onLoadUser() {
          return this.$router.push('/users/' + this.userId);
      }
  },
  layout: 'users'
};
</script>