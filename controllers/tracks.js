const { matchedData } = require("express-validator");
const { tracksModel } = require('../models'); //En este controlador llamo los modelos del index.js de la carpeta Models 
const { handleHttpError } = require("../utils/handleError"); 

//Estas funciones van a recibir todas las cosas que envia express. los argumentos de request y response. 
//Metodo de obtener la lista de la base de datos
const getItems = async (req, res) => { //async y await ayuda a esperar a que retorne todo. 
    try{
        const data = await tracksModel.find({}); //esta constante data me busca todo lo que esta alla. 
        res.send({data});
    }catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
};


//Metodo de obtener un detalle
const getItem = (req, res) => {};

//Metodo de insertar un registro
const createItem = async (req, res) => {

    try{
        const body = req = matchedData(req)//para obtener los datos de una manera limpia y curada
        const data = await tracksModel.create(body);
        res.send({data});
    }catch(e) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");

    }



    
};



//Metodo de actualizar un registro
const updateItem = (req, res) => {};


//Metodo de eliminar un registro
const deleteItem = (req, res) => {};



module.exports = {getItems, getItem, createItem, updateItem, deleteItem};

