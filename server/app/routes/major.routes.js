module.exports = app => {
    const majors = require("../controllers/major.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", majors.create);
    router.get("/", majors.findAll);
    router.get("/:id", majors.findOne);
    router.delete("/:id", majors.delete);
  
    app.use('/api/majors', router);
};