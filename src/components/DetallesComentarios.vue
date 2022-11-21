<template>
    <div v-if="!cubo">
        <img src="./../assets/images/loading.gif" alt="cargando" style="width: 100%;">
    </div>
    <div v-else>
        <div class="card" v-if="cubo" style="width: 80%; margin: auto">
            <img :src="cubo.imagen" class="card-img-top" alt="foto Personaje" style="width:250px; height: 250px;">
            <div class="card-body">
                <h5 class="card-title">{{cubo.nombre}}</h5>
                <p class="card-text">{{cubo.precio}}€</p>
                <p class="card-text">Puntuacion : {{cubo.valoracion}}</p>
            </div>
        </div>
        <hr/>
        <div v-if="!comentarios">
            <h2>No hay comentarios</h2>
        </div>
        <div v-if="comentarios">
            <div class="card" style="display:grid; grid-template-columns: 40% 60%; padding:3%" v-for="com of comentarios" :key="com">
                <div style="width: 18rem;" >
                    <p>{{com.fechaComentario}}</p>
                </div>
                <div>
                    <p>{{com.comentario}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "DetallesComentarios" ,
    data() {
        return {
            cubo : {} ,
            id : 0 ,
            comentarios : []
        }
    },
    methods : {
        cargarCubo() {
            service.getCubosId(this.id).then( res => {
                this.cubo = res;
            })
        },

        cargarComentario() {
            service.getCubosComentarios(this.id).then( res => {
                this.comentarios = res;
            })
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.cargarCubo();
        this.cargarComentario();
    },
    watch: {
        
    }
}
</script>

<style>

</style>