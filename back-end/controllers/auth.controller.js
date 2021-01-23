const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.createuser = async (req, res, next) => {
    const user = await User.findOne({
        userName: req.body.userName,
    });
    if (!user) {
        const { email, userName, password } = req.body;
        const user = new User({
            email,
            userName,
            password,
        });
        user.save((err, newUser) => {
            if (err) {
                res.status(500).send({
                    error: "Failed to save user in database",
                });
            } else {
                newUser.hashedPassword = undefined;
                newUser.salt = undefined;
                res.send(newUser);
            }
        });
    } else {
        res.status(400).send({
            error: "This username already exists",
        });
    }
};

exports.signin = async (req, res, next) => {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (user) {
        if (!user.authenticate(password)) {
            return res
                .status(400)
                .send({ error: "User and password does not match" });
        }
        const token = jwt.sign(
            {
                _id: user._id,
            },
            process.env.JWT_SECRET,
            {
                algorithm: "HS256",
                expiresIn: "1d",
            }
        );

        const { _id, userName, email, role } = user;
        return res.send({
            token,
            user: {
                _id,
                userName,
                email,
                role,
            },
        });
    } else {
        return res
            .status(400)
            .send({ error: "Username and password do not match" });
    }
};

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
});

exports.adminMiddleware = async (req, res, next) => {
    const adminUser = req.user._id;
    const user = await User.findById(adminUser, "-hashedPassword -salt");
    if (user) {
        if (user.role != 1) {
            return res
                .status(403)
                .send({ error: "Admin resource. Access denied" });
        }
        req.profile = user;
        next();
    } else {
        return res.status(400).send({ error: "User not found" });
    }
};
