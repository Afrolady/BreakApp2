const fs = require("fs");// file system 
const { matchedData } = require("express-validator");
const {storageModel} = require("../models"); //En este controlador llamo los modelos del index.js de la carpeta Models 
const {handleHttpError} = require("../utils/handleHttpError"); 

const PUBLIC_URL= process.env.PUBLIC_URL;
const MEDIA_PATH= `${__dirname}/../storage`; //ruta absoluta del archivo en el disco local, mis documento, . png. mp4  que esta guardada en el folder storage 
                                            //c:/miproyecto/file-1234.png

//Estas funciones van a recibir todas las cosas que envia express. los argumentos de request y response. 
//Metodo de obtener la lista de la base de datos
const getItems = async (req, res) => { //async y await ayuda a esperar a que retorne todo. 
    try{
        const data = await storageModel.find({}); //esta constante data me busca todo lo que esta alla. 
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_LIST_ITEMS");
    }
}; 



//Metodo de obtener un detalle  
const getItem = async (req, res) => {
    try{
        const { id } = matchedData(req)
        const data = await storageModel.findById(id); //esta constante data me busca todo lo que esta alla. 
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_DETAIL_ITEMS");
    }
};

//Metodo de insertar un registro  
const createItem = async (req, res) => {
    const { file } = req //{file} de coloca en llaves cuando la constante se llamma igual que la propieda que se quiere hacer (req.body)
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data}) //Los controladores siempre deben retornar algo o sino se qudan alli pegados 
};



//Metodo de actualizar un registro
const updateItem = async (req, res) => {};


//Metodo de eliminar un registro 
const deleteItem = async (req, res) => {
    try{
        const { id } = matchedData(req)
        const dataFile = await storageModel.findById(id); //esta constante data me busca todo lo que esta alla. 
        const  {filename} = data;
        const filepath =  `${MEDIA_PATH}/${filename}`; //TODO c:/miproyecto/file-1234.png (ruta absoluta)
        
        fs.unlinkSync(filepath); //Elimina lo que hay en ese registro
        const data =  
        filepath,
        deleted:1 //Respuesta:  Este archivo ha sido eliminado correctamente . 
        
        res.send({data});
    }catch(e){
        handleHttpError(res, "ERROR_DETAIL_ITEMS");
    }
    
}; 



module.exports = {getItems, getItem, createItem, updateItem, deleteItem};