<template>
  <div class="galeria mt-4">
    <h1>Galeria</h1>
    <p>En esta pagina vemos como tratar con un ejemplo real un array e ir iterando a traves de el para ir pintando todos sus datos.
      Para ello se esta usando la vista Home.vue y el componente "Galeria.vue" que a su vez tiene dos componentes hijos "single-image.vue" y "image-list.vue"
    </p>
    <single-image :selectedImage="selectedImageArray"></single-image>
    <image-list :images="imagesArray" v-on:emitImagelala="pepe"></image-list>
  </div>
</template>

<script>
import SingleImage from "./SingleImage";
import ImageList from "./ImageList";
export default {
  name: "galeria",
  components: { ImageList, SingleImage },
  data() {
    return {
      selectedImageArray: "",
      imagesArray: [
        {
          id: 1,
          title: "Primera Imagen",
          description: "Descripción Primera Imagen",
          thumbnail: "galeria/10.jpg",
          imageLink: "galeria/10.jpg"
        },
        {
          id: 2,
          title: "Segunda Imagen",
          description: "Descripción Segunda Imagen",
          thumbnail: "galeria/21.jpg",
          imageLink: "galeria/21.jpg"
        },
        {
          id: 3,
          title: "Tercera Imagen",
          description: "Descripción Tercera Imagen",
          thumbnail: "galeria/24.jpg",
          imageLink: "galeria/24.jpg"
        },
        {
          id: 4,
          title: "Cuarta Imagen",
          description: "Descripción Cuarta Imagen",
          thumbnail: "galeria/28.jpg",
          imageLink: "galeria/28.jpg"
        },
        {
          id: 5,
          title: "Quinta Imagen",
          description: "Descripción Quinta Imagen",
          thumbnail: "galeria/43.jpg",
          imageLink: "galeria/43.jpg"
        },
        {
          id: 6,
          title: "Sexta Imagen",
          description: "Descripción Sexta Imagen",
          thumbnail: "galeria/52.jpg",
          imageLink: "galeria/52.jpg"
        },
        {
          id: 7,
          title: "Séptima Imagen",
          description: "Descripción Séptima Imagen",
          thumbnail: "galeria/66.jpg",
          imageLink: "galeria/66.jpg"
        },
        {
          id: 8,
          title: "Octaba Imagen",
          description: "Descripción Octaba Imagen",
          thumbnail: "galeria/74.jpg",
          imageLink: "galeria/74.jpg"
        }
      ]
    };
  },
  methods: {
    pepe: function(e) {
      this.selectedImageArray = e;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
