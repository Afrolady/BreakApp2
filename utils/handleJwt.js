const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;


//Pasar el objeto del usuario . firmar
const tokenSign = async (user) => { //general el token
const sign = jwt.sign(
    {
    _id: user._id,
    role: user.role,
    },
    JWT_SECRET,
    {
        expiresIn:"2h",
    }
);
return sign

}

//pasar el token de session el JWT. verificar la firma
const verifyToken = async (tokenJwt) => {} //verificar Token  
try {
    return jwt.verify(tokenJwt, JWT_SECRET)
} catch (e) {
    return null;
    
}


 module.exports = {tokenSign, verifyToken};