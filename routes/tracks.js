const express = require("express") //express es el proveedor del servicio WEB
const router = express.Router(); //manejador de las rutas 
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")


//TODO http://localhost/tracks GET, POST, DELETE, PUT. CRUD

//Ruta de listar Item 
router.get("/", getItems);

//Ruta de obtener un detalle de Item 
router.get("/:id", validatorGetItem, getItem);


//Ruta de crear un registro 
router.post("/", validatorCreateItem, createItem); //validacion que se hace al crear un nuevo registro.      

//Ruta de actualizar un registro 
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

//Ruta de eliminar un Item 
router.delete("/:id", validatorGetItem, deleteItem);
 

module.exports = router;