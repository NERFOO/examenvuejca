import Global from "@/Global";
import axios from "axios";

export default class ServicesUsuarios {
    getCubos() {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/";
            var url = Global.urlCubos + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    getCubosId(id) {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/" + id;
            var url = Global.urlCubos + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    getCubosMarca() {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/Marcas";
            var url = Global.urlCubos + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    getCubosMarcaId(id) {
        return new Promise(function (resolve) {
            var request = "/api/Cubos/CubosMarca/" + id;
            var url = Global.urlCubos + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    getCubosComentarios(id) {
        return new Promise(function (resolve) {
            var request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
            var url = Global.urlCubos + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    postLogIn(usuario) {
        return new Promise(function (resolve) {
            var json = JSON.stringify(usuario);
            var header = {
                "Content-Type" : "application/json" ,
                "responseType" : "json"
            }
            var request = "/api/Manage/Login/";
            var url = Global.urlCubos + request;

            axios.post(url, json, {headers : header}).then( res => {
                resolve(res.data);
            })
        })
    }

    getPerfilUsuario() {
        return new Promise(function (resolve) {
            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            };

            var request = "/api/Manage/PerfilUsuario/";
            var url = Global.urlCubos + request;
            axios.get(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }

    postSigIn(usuario) {
        return new Promise(function (resolve) {
            var json = JSON.stringify(usuario);
            var header = {
                "Content-Type" : "application/json" ,
                "responseType" : "json"
            }
            var request = "/api/Manage/RegistroUsuario/";
            var url = Global.urlCubos + request;

            axios.post(url, json, {headers : header}).then( res => {
                resolve(res.data);
            })
        })
    }
}