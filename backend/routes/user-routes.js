const express = require("express");
const {
  CreateNewAccessCode,
  ValidateAccessCode,
} = require("../controllers/userController");

const router = express.Router();

router.post("/user", CreateNewAccessCode);
router.post("/user/validate", ValidateAccessCode);

module.exports = { routes: router };
