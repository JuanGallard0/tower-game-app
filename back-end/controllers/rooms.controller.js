const Room = require("../models/room.model");

module.exports.getRoom = async (req, res, next) => {
    const room = await Room.findOne({ name: req.params.name });
    if (room) {
        res.send(room);
    } else {
        res.status(404);
    }
};

module.exports.getRooms = async (req, res, next) => {
    const rooms = await Room.find({});
    if (rooms) {
        res.send(rooms);
    } else {
        res.status(404);
    }
};

module.exports.newRoom = (req, res, next) => {};

exports.createroom = async (req, res, next) => {
    let url = req.body.name.replace(" ", "%20");
    const room = await Room.findOne({
        name: url,
    });
    if (!room) {
        const { name, description } = req.body;
        const room = new Room({
            name,
            description,
        });
        room.save((err, newRoom) => {
            if (err) {
                res.status(500).send({
                    error: "Failed to save user in database",
                });
            } else {
                res.send(newRoom);
            }
        });
    } else {
        res.status(400).send({
            error: "This room already exists",
        });
    }
};

module.exports.updateRoom = (req, res, next) => {
    res.send(`Actualizando sala ${req.params.id}`);
};

module.exports.deleteroom = async (req, res, next) => {
    console.log(req.body.name);
    const room = await Room.findOne({
        name: req.params.name,
    });
    if (room) {
        room.remove((err, room) => {
            if (err) {
                res.status(500).send({
                    error: "Failed to delete room in database",
                });
            } else {
                res.send(room);
            }
        });
    } else {
        res.status(400).send({
            error: "This room doesn't exist",
        });
    }
};
