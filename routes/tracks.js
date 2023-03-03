const express = require("express") //express es el proveedor del servicio WEB
const router = express.Router(); //manejador de las rutas 
const { getItems, getItem, createItem } = require("..controllers/tracks")


//TODO http://localhost/tracks GET, POST, DELETE, PUT. CRUD

router.get("/", getItems);

router.post("/", createItem);

 




module.exports = router  