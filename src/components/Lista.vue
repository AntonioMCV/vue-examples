<template>
    <div>
        <ul v-for="(item, index) of arrayOrdenado" :key="item.id" class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" @click="aumentar(index)">
                {{index}} - {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-danger btn-block" @click="reiniciar">Reset</button>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { METHODS } from 'http';

export default {
    name: "Lista",
    computed: {
        ...mapState(["frutas"]),
        arrayOrdenado() {
            return this.frutas.sort( (a, b) => b.cantidad - a.cantidad )
        }
    },
    methods: {
        ...mapMutations(["aumentar", "reiniciar"])
    }
}
</script>
