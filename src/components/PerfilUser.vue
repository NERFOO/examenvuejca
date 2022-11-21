<template>
    <div class="card" style="width: 50%; margin: auto">
        <div class="card-body">
            <h5 class="card-title">{{usuario.nombre}}</h5>
            <p class="card-text">{{usuario.email}}</p>
        </div>
    </div>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "PerfilUser" ,
    data() {
        return {
            usuario : {}
        }
    },
    methods : {

    },
    mounted() {
        service.getPerfilUsuario().then( res => {
            this.usuario = res;
        })
    },
    watch: {

    }
}
</script>

<style>

</style>