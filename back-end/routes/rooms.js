var express = require("express");
var router = express.Router();
var {
    getRoom,
    getRooms,
    newRoom,
    updateRoom,
    deleteroom,
    createroom,
} = require("../controllers/rooms.controller");

/* GET users listing. */
router.get("/:name", getRoom);
router.get("/", getRooms);
router.post("/", newRoom);
router.put("/:name", updateRoom);
router.delete("/deleteroom/:name", deleteroom);
router.post("/createroom", createroom);

module.exports = router;
