const { check } = require("express-validator");
const { validateResults } = require("../utils/handleValidator");
const validateLogin = [
  check("email").exists().notEmpty(),
  check("password").exists().notEmpty(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

const validateRegister = [
  check("name").exists().notEmpty(),
  check("age").exists().notEmpty().isNumeric({ min: 12, max: 99 }),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({min:8, max:15}),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

module.exports = { validateLogin, validateRegister };