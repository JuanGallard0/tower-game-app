var mongoose = require("mongoose");
var crypto = require("crypto");

const userSchema = new mongoose.Schema({
    userName: { type: String, unique: true, index: true, required: true },
    email: { type: String, unique: true, index: true, required: true },
    hashedPassword: { type: String, required: true },
    salt: String,
    role: {
        type: String,
        default: 0,
    },
});

userSchema
    .virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function () {
        this._password;
    });

userSchema.methods = {
    authenticate: function (passwordPlain) {
        return this.encryptPassword(passwordPlain) == this.hashedPassword;
    },
    encryptPassword: function (password) {
        if (!password) return " ";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (error) {
            return "";
        }
    },
    makeSalt: function () {
        // Warning: mejores formas de hacer esto
        return Math.round(new Date().valueOf() * Math.random()) + "";
    },
};

module.exports = mongoose.model("User", userSchema);
