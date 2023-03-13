const bcryptjs = require("bcryptjs");

 
const encrypt = async (passwordPlain) => { //contraseña plana
  const hash = await bcryptjs.hash(passwordPlain, 10);
  return hash;
};


//pasar contraseña sin encriptar y pasar contraseña encriptada 
const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };