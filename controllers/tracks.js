const {tracksModel} = require('../models') //En este controlador llamo los modelos del index.js de la carpeta Models 

//Estas funciones van a recibir todas las cosas que envia express. los argumentos de request y response. 
//Metodo de obtener la lista de la base de datos
const getItems = async (req, res) => { //async y await ayuda a esperar a que retorne todo. 
    const data = await tracksModel.find({}); //esta constante data me busca todo lo que esta alla. 

    res.send({data});
};


//Metodo de obtener un detalle
const getItem = (req, res) => {};

//Metodo de insertar un registro
const createItem = async (req, res) => {
    const { body } = req //{body} se coloca en llaves cuando la constante se llamma igual que la propieda que se quiere hacer (req.body)
    console.log(body)
    const data = await tracksModel.create(body)
    res.send({data}) //Los controladores siempre deben retornar algo o sino se quedan alli pegados 
};



//Metodo de actualizar un registro
const updateItem = (req, res) => {};


//Metodo de eliminar un registro
const deleteItem = (req, res) => {};



module.exports = {getItems, getItem, createItem, updateItem, deleteItem};

//hhhhhhhh
