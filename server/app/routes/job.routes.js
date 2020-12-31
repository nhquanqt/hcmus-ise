module.exports = app => {
    const jobs = require("../controllers/job.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", jobs.create);
    router.get("/", jobs.findAll);
    router.get("/major/:major_id", jobs.findByMajorID);
    router.get("/recruitment/:recruitment_id", jobs.findByRecruitmentID);
    router.get("/:id", jobs.findOne);
  
    app.use('/api/jobs', router);
};