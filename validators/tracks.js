const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
    check("name").exists().notEmpty(),//check que el nombre existe y no es una propiedad vacia. 
    check("album").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    check("cover").exists().notEmpty().isURL(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    },
];

const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(), //Un parametro tipo Id que exista y no este vacio y cumpla con un formato de mongoId. 
    (req, res, next) => {
        return validateResults(req, res, next);
    },
];


 
module.exports = {validatorCreateItem, validatorGetItem};