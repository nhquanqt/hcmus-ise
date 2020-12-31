const db = require("../models");
const Majors = db.majors;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('Creating new major');

    if (!req.body.MajorName) {
        res.status(400).send({
            message: "400: Major name should not be empty."
        });
        return;
    }

    const major = {
        MajorName: req.body.MajorName
    };

    Majors.create(major)
        .then(data => {
            res.send(data);
            console.log("200: Major created");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
            console.log("500:", err.message);
        });
};

exports.findAll = (req, res) => {
    Majors.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.findOne = (req, res) => {
    const id = parseInt(req.params.id);

    Majors.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.id);

    Majors.destroy({
        where: {
            id: id
        }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Major has been deleted successfully."
                })
            }
            else {
                res.send({
                    message: "Major was not found."
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};