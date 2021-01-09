const { company, recruitment } = require("../models");
const db = require("../models");
const Job = db.job;
const Recruitment = db.recruitment;
const Major = db.major;
const Op = db.Sequelize.Op;
const Company = db.company;
const RequiredSkill = db.required_skill;

exports.search = (req, res) => {

    const code = 13644634

    var query = JSON.parse(JSON.stringify(req.query));
    
    if(query.JobName == undefined) {
        query.JobName = ''
    }
    if(query.MinSalary == undefined) {
        query.MinSalary = 0
    }
    if(query.MaxSalary == undefined) {
        query.MaxSalary = 100000000000000000000000
    }
    if(query.CompanyName == undefined) {
        query.CompanyName = ''
    }
    if(query.Location == undefined) {
        query.Location = ''
    }
    if(query.MajorName == undefined) {
        query.MajorName = ''
    }
    

    Job.findAll({
        where: {
            JobName: {
                [Op.like]: '%' + query.JobName + '%'
            }
        },
        include: [
            {
                model: Recruitment,
                where: {
                    Salary: {
                        [Op.gte]: query.MinSalary,
                        [Op.lte]: query.MaxSalary
                    }
                },
                include: [
                    {
                        model: Company,
                        where: {
                            CompanyName: {
                                [Op.like]: '%' + query.CompanyName + '%'
                            },
                            Location: {
                                [Op.like]: '%' + query.Location + '%'
                            }
                        }
                    }
                ]
            },
            // {
            //     model: Major,
            //     where: {
            //         MajorName: {
            //             [Op.like]: '%' + query.MajorName + '%'
            //         }
            //     }
            // }
        ]
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

    Job.create(job)
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
    Job.findAll()
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

    Job.findAll({
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
    const recruitmentId = req.params.id;

    Job.findOne({
        where: {
            RecruitmentID: recruitmentId
        },
        include: [
            {
                model: Recruitment,
                include: [
                    {
                        model: Company
                    }
                ]
            }
        ]
    })
        .then(data => {
            var required_skills = [];
            RequiredSkill.findAll({
                where: {
                    RecruitmentID: recruitmentId
                }
            })
            .then(required_skill_data => {
                // console.log(required_skill_data)
                // console.log(data.dataValues);
                res.send({
                    job: data,
                    required_skill: required_skill_data
                });
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Job.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: Recruitment,
                include: [
                    {
                        model: Company
                    }
                ]
            }
        ]
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

exports.delete = (req, res) => {
    const id = parseInt(req.params.id);

    Job.destroy({
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