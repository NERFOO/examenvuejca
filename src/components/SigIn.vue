<template>
    <form  v-on:submit.prevent="registro()">
        <label>Nombre</label>
        <input type="text" v-model="usuario.nombre"><br/>
        <label>Email</label>
        <input type="email" v-model="usuario.email"><br/>
        <label>Password</label>
        <input type="password" v-model="usuario.pass"><br/>
        <label>Confirm the password</label>
        <input type="password" v-model="usuario.confirmpassword"><br/>

        <button type="submit">Login</button>
    </form>
</template>

<script>
import ServicesUsuarios from './../services/ServicesUsuarios';
const service = new ServicesUsuarios();

export default {
    name : "SigIn" ,
    data() {
        //RECOGIDA DE LOS DATOS DEL FORM PARA EL ENVIO DEL NUEVO USUARIO
        return {
            usuario : {
                nombre : "" ,
                email : "" ,
                pass : "" ,
                confirmpassword : ""
            }
        }
    },
    methods : {
        registro() {
            if(this.usuario.pass == this.usuario.confirmpassword) {
                service.postSigIn(this.usuario).then( () => {
                    this.$router.push(`/login`);
                })
            }
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