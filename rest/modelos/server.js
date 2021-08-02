const express = require('express');

class Server
{

    
    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
    }

    routes()
    {
        this.app.get('/:id/following', function (req, res) {
            
            const {id} = req.params

            let usuarioA = new Map();
            let usuarioB = new Map();
            let usuarioC = new Map();

            usuarioA.set("user","userA")
            var following = ["userB","userO","userE","userG"]
            usuarioA.set("following",following)
    
            usuarioB.set("user","userB")
            var followingB = ["userC","userJ","userI","userE"]
            usuarioB.set("following",followingB)
    
    
            usuarioC.set("user","userC")
            var followingC = ["userM","userN","userJ","userI","userE"]
            usuarioC.set("following",followingC)
    

            
            var diccionarioGeneral = new Map(); 


            diccionarioGeneral.set("userA", usuarioA);
            diccionarioGeneral.set("userB", usuarioB);
            diccionarioGeneral.set("userC", usuarioC);

            var diccionarioUsuario = diccionarioGeneral.get(id);

            console.log(diccionarioUsuario);
            
            let jsonResult ={};
            diccionarioUsuario.forEach((value,key) => {
                jsonResult[key] = value
            });

            res.json({
                //data:Array.from(diccionarioUsuario)
                //data:JSON.from(diccionarioUsuario)
                data:jsonResult
            })
            
            
          })


          this.app.get('/:id/followers', function (req, res) {
            
            const {id} = req.params

            let usuarioA = new Map();
            let usuarioB = new Map();
            let usuarioC = new Map();

            usuarioA.set("user","userA")
            var followers = ["userB","userI","userE","userG"]
            usuarioA.set("followers",followers)
    
            usuarioB.set("user","userB")
            var followersB = ["userC","userJ","userI","userE"]
            usuarioB.set("followers",followersB)
    
    
            usuarioC.set("user","userC")
            var followersC = ["userG","userN","userJ","userI","userE"]
            usuarioC.set("followers",followersC)
    

            
            var diccionarioGeneral = new Map(); 


            diccionarioGeneral.set("userA", usuarioA);
            diccionarioGeneral.set("userB", usuarioB);
            diccionarioGeneral.set("userC", usuarioC);

            var diccionarioUsuario = diccionarioGeneral.get(id);

            console.log(diccionarioUsuario);
            
            let jsonResult ={};
            diccionarioUsuario.forEach((value,key) => {
                jsonResult[key] = value
            });

            res.json({
                //data:Array.from(diccionarioUsuario)
                //data:JSON.from(diccionarioUsuario)
                data:jsonResult
            })
            
            
          })


    }

    listen()
    { 
        this.app.listen(this.port, () => {
        console.log('SERVIDOR LEVANTADO', process.env.PORT);
        });
    }




}

module.exports = Server;