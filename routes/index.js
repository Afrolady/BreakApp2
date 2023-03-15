const express = require ("express");
const fs =require("fs"); //fs file system.  create files
const router = express.Router();

const PATH_ROUTES = __dirname; 

const removeExtension = (fileName) => {
    //TODO tracks.js [tracks, js]
    return fileName.split('.').shift() // extrae el nombre del archivo tracks sin la extension js. Despues se concatena con una familia de rutas
}

fs.readdirSync(PATH_ROUTES).filter((file) => {//Lee los files en orden alfabetico
    const name= removeExtension(file) //TODO index, tracks.  const name sera el resultado de la limpieza de ese nombre y puede llegar index o tracks
    if(name !== 'index'){ //Aqui no me interesa index por eso lo aislo. y despues cargo la ruta 
       router.use(`/${name}`,require(`./${file}`)) //TODO http://localhost:3000/api/tracks o api/users o api/storage
    }  
})

//controllers 1:18:00
   
module.exports = router;