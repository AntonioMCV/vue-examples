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
          thumbnail: "https://videotutoriales.com/egipto01.png",
          imageLink: "https://videotutoriales.com/egipto01b.png"
        },
        {
          id: 2,
          title: "Segunda Imagen",
          description: "Descripción Segunda Imagen",
          thumbnail: "https://videotutoriales.com/egipto02.png",
          imageLink: "https://videotutoriales.com/egipto02b.png"
        },
        {
          id: 3,
          title: "Tercera Imagen",
          description: "Descripción Tercera Imagen",
          thumbnail: "https://videotutoriales.com/egipto03.png",
          imageLink: "https://videotutoriales.com/egipto03b.png"
        },
        {
          id: 4,
          title: "Cuarta Imagen",
          description: "Descripción Cuarta Imagen",
          thumbnail: "https://videotutoriales.com/egipto04.png",
          imageLink: "https://videotutoriales.com/egipto04b.png"
        },
        {
          id: 5,
          title: "Quinta Imagen",
          description: "Descripción Quinta Imagen",
          thumbnail: "https://videotutoriales.com/egipto05.png",
          imageLink: "https://videotutoriales.com/egipto05b.png"
        },
        {
          id: 6,
          title: "Sexta Imagen",
          description: "Descripción Sexta Imagen",
          thumbnail: "https://videotutoriales.com/egipto06.png",
          imageLink: "https://videotutoriales.com/egipto06b.png"
        },
        {
          id: 7,
          title: "Séptima Imagen",
          description: "Descripción Séptima Imagen",
          thumbnail: "https://videotutoriales.com/egipto07.png",
          imageLink: "https://videotutoriales.com/egipto07b.png"
        },
        {
          id: 8,
          title: "Octaba Imagen",
          description: "Descripción Octaba Imagen",
          thumbnail: "https://videotutoriales.com/egipto08.png",
          imageLink: "https://videotutoriales.com/egipto08b.png"
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
