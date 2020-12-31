module.exports = app => {
    const fields = require("../controllers/field.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", fields.create);
    router.get("/", fields.findAll);
    router.get("/:id", fields.findOne);
    router.delete("/:id", fields.delete);
  
    app.use('/api/fields', router);
};