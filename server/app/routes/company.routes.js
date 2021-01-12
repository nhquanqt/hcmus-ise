module.exports = app => {
    const companies = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", companies.create);
    router.get("/", companies.findAll);
    router.get("/:id", companies.findOne);
    router.delete("/:id", companies.delete);
  
    app.use('/api/companies', router);
};