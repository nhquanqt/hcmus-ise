const { Sequelize } = require('../models');
const db = require('../models');
const User = db.user;
const Seeker = db.seeker;
const Company = db.company;
const Recruitment = db.recruitment;
const Job = db.job;
const Op = db.Sequelize.Op;
const Apply = db.apply;

module.exports = app => {

    const user = require('../controllers/user.controller');
    const seeker = require('../controllers/seeker.controller');
    const company = require('../controllers/company.controller');
    const job = require('../controllers/job.controller');

    var router = require("express").Router();

    router.get('/user/login', user.login);
    router.post('/user/signup', user.signup);

    router.post('/seeker/uploadProfile', seeker.uploadProfile);
    router.post('/seeker/applyJob', seeker.applyJob);

    router.post('/company/uploadProfile', company.uploadProfile);
    router.post('/company/postJob', company.postJob);
    router.get('/company/getApplies', company.getApplied);

    router.get('/jobs/all', job.findAll);
    router.get('/jobs/id/:id', job.findOne);
    router.get('/jobs/search', job.search);

    app.use('/api', router);
};