const express = require("express") //express es el proveedor del servicio WEB
const router = express.Router(); //manejador de las rutas 

//TODO http://localhost/tracks GET, POST, DELETE, PUT. CRUD

router.get("/tracks", (req, res) => {
    
    const data = ["hola", "mundo"]
    
    res.send({data})
}) 

//Obtener una lista de cosas 


module.exports = router 