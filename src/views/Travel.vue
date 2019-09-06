<template>
  <div class="travel">
    <h1>Travel Dates</h1>
    <p>En este ejemplo se muestra como se puede hacer viajar datos de padre a hijo y de hijo a padre de dos formas diferentes, con la ayuda de VUEX y sin ella.
      Usamos para ello la vista de "Travel.vue" y un componente hijo "Travelsong.vue". Para mandar datos a los hijos se usara v-bind y el hijo lo podra recibir con el objeto "props" y para mandar datos desde el hijo tendremos que realizar un "$emit" que el padre recojera haciendo uso del v-on. Por otra parte para trabajar con VUEX es necesarior utilzar la store que se encuentra en "store.js"
    </p>
    <div class="p-3 my-3 bg-success">
      <h3>Elemento padre</h3>
      <h3>dato desde hijo: {{nombreHijo}}</h3>
      <h3>dato desde padre: {{nombrePadre}}</h3>
      <h4 >Total sin VUEX: {{numero}}</h4>
      <h4>Total VUEX: {{$store.state.count}}</h4>
      <travelsong v-on:emitNumber="takemenumber" :travelNumber="numero" :travelNameFather="nombrePadre" @travelNameSon="nombreHijo = $event"></travelsong>
    </div>
  </div>
</template>

<script>
import Travelsong from "@/components/Travelsong.vue";
export default {
  name: "travel",
  components: {
    Travelsong
  },
  data() {
    return {
      nombrePadre: "Felipe",
      nombreHijo: "",
      numero: 3
    }
  },
  methods: {
    takemenumber: function(e) {
      this.numero = e;
    }
  }
};
</script>