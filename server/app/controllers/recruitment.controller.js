const db = require("../models");
const Recruitments = db.recruitments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('Creating new recruitment');

    const recruitment = {
        CompanyID: req.body.CompanyID,
        RecruitmentDate: req.body.RecruitmentDate,
        ExpiredDate: req.body.ExpiredDate,
        Description: req.body.Description,
        Salary: req.body.Salary
    };

    Recruitments.create(field)
        .then(data => {
            res.send(data);
            console.log("200: Recruitment created");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
            console.log("500:", err.message);
        });
};

exports.findAll = (req, res) => {
    Recruitments.findAll()
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

    Recruitments.findByPk(id)
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

    Recruitments.destroy({
        where: {
            id: id
        }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Recruitment has been deleted successfully."
                })
            }
            else {
                res.send({
                    message: "Recruitment was not found."
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};