<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item dropdown" v-if="marcas">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marcas
                    </a>
                    <ul class="dropdown-menu">
                        <li><router-link v-for="marca in marcas" :key="marca" class="nav-link active" aria-current="page" :to="`/cubos/${marca}`">{{marca}}</router-link></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/registro">Registro</router-link>
                </li>
                </ul>
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "MenuComponent" ,
    data() {
        return {
            marcas : []
        }
    },
    methods : {

    },
    mounted() {
        service.getCubosMarca().then( res => {
            this.marcas = res;
        })
    },
    watch: {

    }
}
</script>

<style>

</style>