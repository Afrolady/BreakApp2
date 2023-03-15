const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator")



const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(), //Un parametro tipo Id que exista y no este vacio y cumpla con un formato de mongoId. 
    (req, res, next) => {
        return validateResults(req, res, next);
    },
];

 
 
module.exports = { validatorGetItem};