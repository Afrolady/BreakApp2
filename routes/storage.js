const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {createItem} = require("../controllers/storage");



router.post("/", uploadMiddleware.single("myfile"), createItem); //myfile es el nombre del archivo en postman
   

module.exports = router;

