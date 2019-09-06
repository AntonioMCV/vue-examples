<template>
  <div class="travel">
    <div class="p-3 my-3 bg-danger">
      <h3>Elemento hijo</h3>
      <h3>dato desde hijo: {{nombre}}</h3>
      <h3>dato desde padre: {{travelNameFather}}</h3>
      <button class="btn btn-success my-3" @click="$store.state.count++">sumar con VUEX</button>
      <button class="btn btn-warning m-3" @click="travelNumberToParent(travelNumber)">sumar sin VUEX</button>
      <h4>Total sin VUEX: {{travelNumber}}</h4>
      <h4>Total VUEX: {{ $store.state.count }}</h4>
    </div>
  </div>
</template>

<script>

export default {
  name: "travelsong",
  data() {
      return {
          nombre: "Ignacio"
      }
  },
  props: ['travelNameFather', 'travelNumber'],
  mounted() {
      this.$emit('travelNameSon', this.nombre);
  },
  methods: {
    travelNumberToParent(numberFromson) {
      numberFromson++;
      this.$emit('emitNumber', numberFromson);
    }
  }
};
</script>
