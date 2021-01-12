const db = require("../models");
const Company = db.company;
const Job = db.job;
const Recruitment = db.recruitment;
const RequiredSkill = db.required_skill;

exports.findOne = (req, res) => {

    const id = req.params.id;

    Company.findOne({
        where: {
            UserID: id
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log("Error " + err.message);
        res.status(500).send(err);
    })
}

exports.getApplied = (req, res) => {
    var query = JSON.parse(JSON.stringify(req.query));

    const code = 53391468;

    Apply.findAll({
        where: {
            RecruimentID: query.RecruimentID
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send({message: err.message});
        console.log('Error (' + code + '): ' + err.message);
    });
}

exports.uploadProfile = (req, res) => {

    const company = {
        UserID: req.body.UserID,
        FieldID: req.body.FieldID,
        CompanyName: req.body.CompanyName,
        Location: req.body.Location,
        CompanyEmail: req.body.CompanyEmail,
        CompanyPhoneNumber: req.body.CompanyPhoneNumber,
        CompanyDescription: req.body.CompanyDescription,
    };

    Company.findAll({
        where: {
            UserID: company.UserID
        }
    })
    .then(data => {
        var code = 89312898
        if(data.length == 1) {
            // Update
            Company.update(company, {where: {id: data[0].id}})
            .then(data => {
                res.send(data);
                console.log('Update success');
            })
            .catch(err => {
                console.log('Error', code, err.message);
            });
        }
        else {
            // Create
            Company.create(company)
            .then(data => {
                res.send(data);
                console.log('Update success');
            })
            .catch(err => {
                console.log('Error', code, err.message);
            });
        }
    })
    .catch(err => {
        console.log(err.message);
        res.send({message: err.message});
    });
}

exports.postJob = (req, res) => {

    const recruitment = {
        CompanyID: req.body.CompanyID,
        RecruitmentDate: req.body.RecruitmentDate,
        ExpiredDate: req.body.ExpiredDate,
        Description: req.body.Description,
        Salary: req.body.Salary,
        Requirement: req.body.Requirement,
        YearsOfExperience: req.body.YearsOfExperience
    };

    const code = 34357246;

    Recruitment.create(recruitment)
    .then(data => {
        const job = {
            RecruitmentID: data.id,
            MajorName: req.body.MajorName,
            JobName: req.body.JobName,
            JobType: req.body.JobType,
            JobDescription: req.body.JobDescription,
        };

        Job.create(job)
        .then(() => {
            console.log("Post job success");
            console.log(req.body.RequiredSkill);

            for(var i = 0; i < req.body.RequiredSkill.length; ++i) {
                const required_skill = {
                    RecruitmentID: data.id,
                    SkillName: req.body.RequiredSkill[i].SkillName, 
                    SkillSetID: req.body.RequiredSkill[i].SkillSetID, 
                    Level: req.body.RequiredSkill[i].Level
                };
    
                RequiredSkill.create(required_skill)
                .then( () => {
                    console.log('Required skill added');
                })
                .catch(err => {
                    confirm.log('Error ' + err.message);
                    res.send({message: false});
                })
            }
            res.send({message: true});
        })
        .catch(() => {
            console.log('Error', code, err.message);
            res.send({message: false});
        });
        
    })
    .catch(err => {
        console.log('Error', code, err.message);
        res.send({message: false});
    });
}