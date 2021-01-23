const User = require("../models/user.model");

module.exports.getUser = async (req, res, next) => {
    const user = await User.findOne({ userName: req.params.username });
    if (user) {
        res.send(user);
    } else {
        res.status(404);
    }
};

module.exports.getUsers = async (req, res, next) => {
    const users = await User.find({});
    if (users) {
        res.send(users);
    } else {
        res.status(404);
    }
};

module.exports.newUser = (req, res, next) => {};

module.exports.updateUser = (req, res, next) => {
    res.send(`Actualizando usuario ${req.params.id}`);
};

module.exports.deleteUser = (req, res, next) => {
    res.send(`Borrando usuario ${req.params.id}`);
};
