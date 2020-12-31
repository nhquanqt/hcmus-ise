const db = require("../models");
const Companies = db.companies;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('Creating new major');

    if (!req.body.CompanyName) {
        res.status(400).send({
            message: "400: Company name should not be empty."
        });
        return;
    }

    const company = {
        FieldID: req.body.FieldID,
        CompanyName: req.body.CompanyName,
        Location: req.body.Location,
        CompanyEmail: req.body.CompanyEmail,
        CompanyDescription: req.body.CompanyDescription,
    };

    Companies.create(company)
        .then(data => {
            res.send(data);
            console.log("200: Company created");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
            console.log("500:", err.message);
        });
};

exports.findAll = (req, res) => {
    Companies.findAll()
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

    Companies.findByPk(id)
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

    Companies.destroy({
        where: {
            id: id
        }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Company has been deleted successfully."
                })
            }
            else {
                res.send({
                    message: "Company was not found."
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};