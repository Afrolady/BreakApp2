const express = require("express");
const {loginCtrl, registerCtrl} = require("../controllers/auth");
const router = express.Router();
const {validateRegister, validateLogin} = require("../validators/auth");


//TODO http:localhost:3001/api/auth/login 
//TODO http:localhost:3001/api/auth/register


router.post("/register", validateRegister, registerCtrl);


router.post("/login", validateLogin, loginCtrl);



module.exports = router;