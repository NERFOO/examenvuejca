<template>
    <form  v-on:submit.prevent="token()">
        <label>Email</label>
        <input type="email" v-model="usuario.email"><br/>
        <label>Password</label>
        <input type="password" v-model="usuario.password"><br/>
        <button type="submit">Login</button>
    </form>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "LogIn" ,
    data() {
        //RECOGIDA DE LOS DATOS DEL FORM PARA EL ENVIO DEL NUEVO USUARIO
        return {
            usuario : {
                email : "" ,
                password : ""
            }
        }
    },
    methods : {
        token() {
            service.postLogIn(this.usuario).then( res => {
                localStorage.setItem('token', res.response);
                this.$router.push(`/perfiluser`);
            })
        }
    },
    mounted() {
       
    },
    watch: {

    }
}
</script>

<style>

</style>