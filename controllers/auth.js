const {matchedData} = require("express-validator");
const {encrypt, compare} = require("../utils/handlePassword");
const {tokenSign} = require("../utils/handleJwt");
const {handleHttpError} = require("../utils/handleError");
const {usersModel} = require("../models"); 

//Controlador encargado de registrar un usuario. 
const registerCtrl = async (req, res) => {
    try{
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };//se duplica el objeto anterior y se le sobreescribe la propiedad password en comillas de passwordHash.  
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false }); //setear la propiedad password con un valor undefined que no sea tan estricto.  
    
    const data = {
        token: await tokenSign(dataUser), 
        user:dataUser
    }
    
    res.send({data});
}catch (e) {
    handleHttpError(res, "ERROR_REGISTER_USER");
};

//Controlador encargado de logear un usuario. 
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req); //Cura la data para que solo venga el email y el password. 
        const user = await usersModel.findOne({ email:req.email}).select('password name role email');
        if(!user){//si el usuario no exite 
            handleHttpError(res, "USER_NOT_FOUND", 404);
            return
        }

        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword);

        if (!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return
        }

        user.set('password', undefined, {strict:false});
        const data = {
            token: await tokenSign(user),
            user
            }
            res.send({data})
         } catch (e) {
        handleHttpError(res, "ERROR_LOGIN_USER");
        }
}


module.exports = {registerCtrl, loginCtrl}; 
