const express = require("express");
const router = express.Router();
const moduleController = require("../controllers/module");

router.get("/:module", moduleController.getQuestions);

module.exports = router;
