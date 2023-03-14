const express = require("express") //express es el proveedor del servicio WEB
const router = express.Router(); //manejador de las rutas 
const authMiddleware = require("../middleware/session");
const checkRole = require("../middleware/rol");
const customHeader = require("../middleware/customHeader");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")


//TODO http://localhost/tracks GET, POST, DELETE, PUT. CRUD

//Ruta de listar Item 
router.get("/", authMiddleware ,getItems);

//Ruta de obtener un detalle de Item 
router.get("/:id", authMiddleware, validatorGetItem, getItem);


//Ruta de crear un registro 
router.post("/", authMiddleware, checkRole("admin"), validatorCreateItem, createItem); //validacion que se hace al crear un nuevo registro.      
//checkRole("admin", "user", "manager")

//Ruta de actualizar un registro 
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);

//Ruta de eliminar un Item 
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);
 

module.exports = router;