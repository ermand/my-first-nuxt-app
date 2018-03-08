<template>
  <section class="container">
    <div>
      Show a user with id {{ $route.params.id }}
    </div>
  </section>
</template>

<script>
export default {
  validate(data) {
    console.log(data);
    return  /^\d+$/.test(data.params.id);
  }
};
</script>