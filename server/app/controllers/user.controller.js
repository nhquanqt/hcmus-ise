const db = require("../models");
const User = db.user;

exports.login = (req, res) => {
    User.findAll({
        where: {
            Username: req.body.Username,
            Password: req.body.Password
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.signup = (req, res) => {
    const user = {
        UserTypeID: req.body.UserTypeID,
        AccountEmail: req.body.AccountEmail,
        Username: req.body.Username,
        Password: req.body.Password,
        LinkedAccount: req.body.LinkedAccount,
    };

    User.create(user)
        .then(data => {
            res.send(data);
            console.log("200: User created");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
            console.log("500:", err.message);
        });
};