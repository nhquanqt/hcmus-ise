const db = require("../models");
const Jobs = db.jobs;
const Op = db.Sequelize.Op;

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
                message: "Error retrieving Tutorial with id=" + id
            });
        });
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