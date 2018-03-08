<template>
  <header class="header">
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">Users</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/products">Products</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

.nav-items a {
  text-decoration: none;
  color: black;
  font-size: 2rem;
}

.nav-items a:hover,
.nav-items a:active {
  color: white;
}
</style>
