const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {validatorGetItem} = require("../validators/storage"); 
const {getItems, getItem, deleteItem, createItem} = require("../controllers/storage");



//Lista de Items 
router.get("/", getItems);

//Detalle de Item
router.get("/:id", validatorGetItem, getItem);

//Eliminar Item 
router.delete("/:id", validatorGetItem, deleteItem);


//Crear Item
router.post("/", uploadMiddleware.single("myfile"), createItem); //myfile es el nombre del archivo en postman
   

module.exports = router;

