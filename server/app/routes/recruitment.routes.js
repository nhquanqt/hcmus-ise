module.exports = app => {
    const recruitments = require("../controllers/recruitment.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", recruitments.create);
    router.get("/", recruitments.findAll);
    router.get("/:id", recruitments.findOne);
    router.delete("/:id", recruitments.delete);
  
    app.use('/api/recruitments', router);
};