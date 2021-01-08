const { Sequelize } = require('../models');
const db = require('../models');
const User = db.user;
const Seeker = db.seeker;
const Company = db.company;
const Recruitment = db.recruitment;
const Job = db.job;
const Op = db.Sequelize.Op;
const Apply = db.apply;
const UserType = db.user_type;

module.exports = app => {

    const user = require('../controllers/user.controller');
    const seeker = require('../controllers/seeker.controller');
    const company = require('../controllers/company.controller');
    const job = require('../controllers/job.controller');

    var router = require("express").Router();

    router.get('/user/login', user.login);
    router.post('/user/signup', user.signup);

    router.get('/user/id/:id', user.findOne);

    router.post('/seeker/uploadProfile', seeker.uploadProfile);
    router.post('/seeker/applyJob', seeker.applyJob);

    router.post('/company/uploadProfile', company.uploadProfile);
    router.post('/company/postJob', company.postJob);
    router.get('/company/getApplies', company.getApplied);

    router.get('/jobs/all', job.findAll);
    router.get('/jobs/id/:id', job.findOne);
    router.get('/jobs/search', job.search);

    router.get('/recruitments/id/:id', job.findByRecruitmentID);

    router.post('/user/type', (req, res) => {

        const user_type = {
            UserTypeName: req.body.UserTypeName
        };

        UserType.create(user_type)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err.message);
        });
    })

    app.use('/api', router);
};