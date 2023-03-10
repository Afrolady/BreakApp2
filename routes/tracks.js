const express = require("express") //express es el proveedor del servicio WEB
const router = express.Router(); //manejador de las rutas 
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem } = require("../validators/tracks")
const { getItems, getItem, createItem } = require("../controllers/tracks")


//TODO http://localhost/tracks GET, POST, DELETE, PUT. CRUD

router.get("/", getItems);

router.post("/", validatorCreateItem, createItem); //validacion que se hace al crear un nuevo registro.      




module.exports = router  