const multer = require("multer");




const storage = multer.diskStorage({
    destination: function(req, file, cb) { //cbfuncion call back
        const pathStorage = `${__dirname}/../storage`  //aqui se guardan los archivos
        cb(null, pathStorage)
    },
    //funcion para asignar el nombre al archivo
    filename: function(req, file, cb) {
         //TODO: mi-cv.pdf mi-foto.png mi-video.mp4   //Los archivos tienen extension. Un formato
        //const ext obtiene la extension.
         const ext = file.originalname.split(".").pop(); //pop es lo contrario shift que toma le primer valor de un array.  Este toma el ultimo valor. //TODO ["name","png"] 
         const filename = `file-${Date.now()}.${ext}`; //devuelve TODO FILE-1234556.mp4 (nombre de file y numero aleatorio del archivo y el formato)
         cb(null, filename)
    },
});

//Middleware funcion que esta en la mitad de la ruta y el controlador.  este filtra
const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;