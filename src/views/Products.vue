<template>
  <div class="products a">
    <h1>Fruits list</h1>
    <p>Ejemplo sencillo para ver como interactuar con VUE haciendo sumas y añadiendo nuevos contendido a un array, en este caso se utiliza la vista "Products.vue" y el componente "Productslist.vue"</p>
    <productslista />
  </div>
</template>

<script>
// @ is an alias to /src
import productslista from "@/components/Productslist.vue";

export default {
  name: "products",
  components: {
    productslista
  }
};
</script>