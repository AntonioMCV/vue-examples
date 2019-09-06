<template>
  <div id="app">
    <div id="nav" class="bg-light py-3">
      <div class="container">
        <router-link to="/">Galery</router-link> |
        <router-link to="/travel">Travel Dates</router-link> |
        <router-link to="/products">Products</router-link> |
        <router-link to="/fruits">Fruits</router-link>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
};
</script>
