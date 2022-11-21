<template>
    <div v-if="!cubos">
        <img src="./../assets/images/loading.gif" alt="cargando" style="width: 100%;">
    </div>
    <div style="display:grid; grid-template-columns: 50% 50%;">
    <div class="card" v-for="cubo of cubos" :key="cubo">
        <img :src="cubo.imagen" class="card-img-top" alt="foto Personaje">
        <div class="card-body">
            <h5 class="card-title">{{cubo.nombre}}</h5>
            <p class="card-text">{{cubo.precio}}€</p>
            <p class="card-text">Puntuacion : {{cubo.valoracion}}</p>
            <router-link :to="`/detalles/${cubo.idCubo}`" class="btn btn-success">Detalles</router-link>
        </div>
    </div>
</div>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "HomeComponent" ,
    data() {
        return {
            cubos : []
        }
    },
    methods : {

    },
    mounted() {
        service.getCubos().then( res => {
            this.cubos = res;
        })
    },
    watch: {

    }
}
</script>

<style>

</style>