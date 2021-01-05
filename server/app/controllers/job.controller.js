const db = require("../models");
const Jobs = db.jobs;
const Op = db.Sequelize.Op;

exports.search = (req, res) => {

    const code = 13644634

    var query = req.body;
    
    if(query.name == undefined) {
        query.name = ''
    }
    if(query.min == undefined) {
        query.min = 0
    }
    if(query.max == undefined) {
        query.max = 100000000000000000000000
    }

    Job.findAll({
        where: {
            JobName: {
                [Op.like]: '%' + req.body.name + '%'
            },                
        },
        include: [{
            model: Recruitment,
            where: {
                Salary: {
                    [Op.gte]: req.body.min,
                    [Op.lte]: req.body.max
                }
            }
        }]
    })
    .then(data => {
        console.log("Run job search success");
        res.send(data);
    })
    .catch(err => {
        console.log('Error (' + code + '): ' + err.message);
        res.status(500).send(err);
    })
}

exports.create = (req, res) => {
    console.log('Creating new job');

    if (!req.body.JobName) {
        res.status(400).send({
            message: "400: Job name should not be empty."
        });
        return;
    }

    const job = {
        RecruitmentID: req.body.RecruitmentID,
        MajorID: req.body.MajorID,
        JobName: req.body.JobName,
        JobType: req.body.JobType,
        JobDescription: req.body.JobDescription
    };

    Jobs.create(job)
        .then(data => {
            res.send(data);
            console.log("200: Job created");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
            console.log("500:", err.message);
        });
};

exports.findAll = (req, res) => {
    Jobs.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.findByMajorID = (req, res) => {
    const majorId = parseInt(req.params.major_id);

    Jobs.findAll({
        where: {
            MajorID: majorId
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

exports.findByRecruitmentID = (req, res) => {
    const recruitmentId = parseInt(req.params.recruitment_id);

    Jobs.findAll({
        where: {
            RecruitmentId: recruitmentId
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

exports.findOne = (req, res) => {
    const id = parseInt(req.params.id);

    Jobs.findByPk(id)
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

    Jobs.destroy({
        where: {
            id: id
        }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: "Job has been deleted successfully."
                })
            }
            else {
                res.send({
                    message: "Job was not found."
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};