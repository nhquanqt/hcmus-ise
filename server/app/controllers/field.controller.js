const db = require("../models");
const Fields = db.fields;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('Creating new field');

    if (!req.body.FieldName) {
        res.status(400).send({
            message: "400: Field name should not be empty."
        });
        return;
    }

    const field = {
        FieldName: req.body.FieldName,
        Description: req.body.Description
    };

    Fields.create(field)
        .then(data => {
            res.send(data);
            console.log("200: Field created");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
            console.log("500:", err.message);
        });
};

exports.findAll = (req, res) => {
    Fields.findAll()
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

    Fields.findByPk(id)
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

    Fields.destroy({
        where: {
            id: id
        }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Field has been deleted successfully."
                })
            }
            else {
                res.send({
                    message: "Field was not found."
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};