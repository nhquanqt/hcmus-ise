const { Sequelize } = require('../models');
const db = require('../models');
const User = db.user;
const Seeker = db.seeker;
const Company = db.company;
const Recruitment = db.recruitment;
const Job = db.job;

module.exports = app => {

    const user = require('../controllers/user.controller');
    const seeker = require('../controllers/seeker.controller');
    const company = require('../controllers/company.controller');

    var router = require("express").Router();

    router.get('/user/login', user.login);
    router.post('/user/signup', user.signup);

    router.post('/seeker/uploadProfile', seeker.uploadProfile);

    router.post('/company/uploadProfile', company.uploadProfile);
    router.post('/company/postJob', company.postJob);
  
    app.use('/api', router);
};