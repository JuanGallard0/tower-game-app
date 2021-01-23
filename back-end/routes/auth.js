const express = require("express");
const router = express.Router();

var { createuser, signin } = require("../controllers/auth.controller");

router.post("/createuser", createuser);
router.post("/signin", signin);

module.exports = router;
