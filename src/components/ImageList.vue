<template>
  <div class="galeria">
    <div class="container mt-4">
      <div class="row">
        <div
          v-for="image in images"
          :key="image.id"
          class="col-md-3 col-sm-4 col-6"
        >
          <a href="#" v-on:click="emitImage(image)">
            <img class="img-fluid" :src="image.thumbnail" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["images"],
  methods: {
    emitImage: function(el) {
      this.$emit("emitImagelala", el);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;

  &:hover {
    filter: grayscale(100%);
  }
}
</style>
