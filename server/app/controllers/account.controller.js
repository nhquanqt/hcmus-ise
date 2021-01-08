const db = require("../models");
const Accounts = db.accounts;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    console.log('Creating new account');

    if (!req.body.username) {
        res.status(400).send({
            message: "username should not be empty."
        });
        return;
    }

    const account = {
        username: req.body.username,
        password: req.body.password
    };

    Accounts.create(account)
        .then(data => {
            res.send(data);
            console.log("Account created");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
            console.log("Error:", err.message);
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};