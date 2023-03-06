const { check } = require("express-validator");

const validatorCreateItem = [
    check("name").exists().notEmpty(.isLenght(min:5, max))

]

module.exports = {validatorCreateItem}