var mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    name: { type: String, unique: true, index: true, required: true },
    description: { type: String, unique: true, index: true, required: true },
});

module.exports = mongoose.model("Room", roomSchema);
