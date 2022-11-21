<template>
    <div v-if="!cubosMarcas">
        <img src="./../assets/images/loading.gif" alt="cargando" style="width: 100%;">
    </div>
    <div style="display:grid; grid-template-columns: 50% 50%;">
    <div class="card" v-for="cubos of cubosMarcas" :key="cubos">
        <img :src="cubos.imagen" class="card-img-top" alt="foto Personaje">
        <div class="card-body">
            <h5 class="card-title">{{cubos.nombre}}</h5>
            <p class="card-text">{{cubos.precio}}€</p>
            <p class="card-text">Puntuacion : {{cubos.valoracion}}</p>
            <router-link :to="`/detalles/${cubos.idCubo}`" class="btn btn-success">Detalles</router-link>
        </div>
    </div>
</div>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "CubosMarcas" ,
    data() {
        return {
            marca : "" ,
            cubosMarcas : []
        }
    },
    methods : {
        cargarCubos() {
            this.marca = this.$route.params.name;
            service.getCubosMarcaId(this.marca).then( res => {
                this.cubosMarcas = res;
                console.log("hola")
            })
        }
    },
    mounted() {
        this.marca = this.$route.params.name;
        this.cargarCubos();
    },
    watch: {
        '$route.params.name'(nextVal, oldVal) {
            if(nextVal != oldVal) {
                this.cargarCubos();
            }
        }
    }
}
</script>

<style>

</style>