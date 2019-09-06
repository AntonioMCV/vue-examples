<template>
  <div>
    <input type="text" v-model="newFruit">
    <button v-on:click="addFruits">Add fruit</button>
    <ul>
      <li v-bind:key="fruta.id" v-for="fruta of frutas">
        <input type="number" v-model.number="fruta.number">
        {{ fruta.name }}
        <button v-on:click="fruta.number++">+</button>
        <b v-if="fruta.number === 0"> - No stock</b>
      </li>
    </ul>
    <h3>
      Total: {{ totalOperation }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "productslista",
  data() {
    return {
      frutas: [
        { name: "manzanas", number: 10 },
        { name: "peras", number: 2 },
        { name: "platanos", number: 0 }
      ],
      newFruit: ""
    }
  },
  methods: {
      addFruits() {
          this.frutas.push({
              name: this.newFruit, number: 0
          })
      }
  },
  computed: {
    totalOperation(){
      var total= 0;
      var fruitsNumber = {};
      for(fruitsNumber of this.frutas) {
        total = total + fruitsNumber.number;
      }
      return total;
    }
  }
};
</script>
