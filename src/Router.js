import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import CubosMarcas from './components/CubosMarcas.vue';
import DetallesComentarios from './components/DetallesComentarios.vue';
import LogIn from './components/LogIn.vue';
import PerfilUser from './components/PerfilUser.vue';
import SigIn from './components/SigIn.vue';

const routes = [
    {
        path : "/" , component : HomeComponent
    },
    {
        path : "/cubos/:name" , component : CubosMarcas
    },
    {
        path : "/detalles/:id" , component : DetallesComentarios
    },
    {
        path : "/login" , component : LogIn
    },
    {
        path : "/perfiluser" , component : PerfilUser
    },
    {
        path : "/registro" , component : SigIn
    },
]

const router = createRouter({
    history : createWebHistory() ,
    routes : routes
})

export default router;