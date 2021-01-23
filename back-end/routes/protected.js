var express = require("express");
var router = express.Router();
var {
    requireSignin,
    adminMiddleware,
} = require("../controllers/auth.controller");

router.get("/", requireSignin, (req, res, next) => {
    res.send("Protected");
});

router.get("/admin", requireSignin, adminMiddleware, (req, res, next) => {
    res.send("Protected Admin");
});

module.exports = router;
