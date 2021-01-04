const db = require("../models");
const Company = db.company;
const Job = db.job;
const Recruitment = db.recruitment;

exports.uploadProfile = (req, res) => {

    const company = {
        UserID: req.body.UserID,
        FieldID: req.body.FieldID,
        CompanyName: req.body.CompanyName,
        Location: req.body.Location,
        CompanyEmail: req.body.CompanyEmail,
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
            .then(() => {
                console.log('Update success');
            })
            .catch(err => {
                console.log('Error', code, err.message);
            });
        }
        else {
            // Create
            Company.create(company)
            .then(() => {
                console.log('Update success');
            })
            .catch(err => {
                console.log('Error', code, err.message);
            });
        }
        res.send({message: true});
    })
    .catch(err => {
        console.log(err.message);
        res.send({message: false});
    });
}

exports.postJob = (req, res) => {

    const recruitment = {
        CompanyID: req.body.CompanyID,
        RecruitmentDate: req.body.RecruitmentDate,
        ExpiredDate: req.body.ExpiredDate,
        Description: req.body.Description,
        Salary: req.body.Salary
    };

    const code = 34357246;

    Recruitment.create(recruitment)
    .then(data => {
        const job = {
            RecruitmentID: data.id,
            MajorID: req.body.MajorID,
            JobName: req.body.JobName,
            JobType: req.body.JobType,
            JobDescription: req.body.JobDescription,
        };

        Job.create(job)
        .then(() => {
            console.log("Post job success");
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