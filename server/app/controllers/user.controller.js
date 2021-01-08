const db = require("../models");
const User = db.user;
const AccountDetail = db.account_detail;

exports.login = (req, res) => {
    const AccountEmail = req.query.AccountEmail;
    const Password = req.query.Password;
    User.findAll({
        where: {
            // Username: req.body.Username,
            AccountEmail: AccountEmail,
            Password: Password
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
        UserType: req.body.UserType,
        AccountEmail: req.body.AccountEmail,
        Password: req.body.Password,
        LinkedAccount: req.body.LinkedAccount,
    };

    User.create(user)
        .then(data => {
            const UserID = data.id;
            const account_detail = {
                Email: req.body.AccountEmail,
                DisplayName: req.body.DisplayName
            };
            AccountDetail.create(account_detail)
            .then(() => {
                console.log(UserID);
                res.send({UserID: UserID});
            })
            .catch(err => {
                console.log('Error ' + err.message);
                res.send(err.message);
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
            console.log("500:", err.message);
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findOne({
        where: {
            id: id
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send(err.message);
    })
}