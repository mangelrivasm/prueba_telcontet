
const http = require("http");
global.XMLHttpRequest = require('xhr2');

const fetch = require('node-fetch');

const main = async(usuarioA, usuarioB) => {

    var distancia = 0;

    // DISTANCIA 1
    var response = await ObtenerListaFollowing(usuarioA)

    response = JSON.parse(response) 

    var listaSiguiendo = response.data.following;

    console.log('iendo'+listaSiguiendo)
    if(listaSiguiendo.includes(usuarioB))
    {
        distancia = 1;
        console.log('distancia: ',distancia)
        return;
    }

    response = await ObtenerListaFollowers(usuarioA)


    response = JSON.parse(response) 

    var listaSeguidores = response.data.followers;

    console.log('ores'+listaSeguidores)
    if(listaSeguidores.includes(usuarioB))
    {
        distancia = 1;
        console.log('distancia: ',distancia)
        return;
    }



    //DISTANCIA 2
    
    response = await ObtenerListaFollowers(usuarioB)


    response = JSON.parse(response) 

    var listaSeguidoresB = response.data.followers;
    console.log(listaSeguidoresB)
    var listaInterseccion = listaSiguiendo.filter(value => listaSeguidoresB.includes(value));
    console.log(listaInterseccion)
    if(listaInterseccion != null)
    {
        distancia = 2;
        console.log('distancia: ',distancia)
        return; 
    }


    //DISTANCIA N





}

const ObtenerListaFollowing = async(usuario) => {


    var url = `http://localhost:8080/${usuario}/following`;

    return new Promise(function (resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    })



}

const ObtenerListaFollowers = async(usuario) => {


    var url = `http://localhost:8080/${usuario}/followers`;

    return new Promise(function (resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    })



}


main("userA", "userC");