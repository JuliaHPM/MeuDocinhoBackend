module.exports = app => {
    const doces = require("../controllers/doce.controller.js");
  
    var router = require("express").Router();
  
    // Create a new doce
    router.post("/", doces.create);
  
    // Retrieve all doces
    router.get("/", doces.findAll);
  
    // Retrieve a single doce with id
    router.get("/:id", doces.findOne);
  
    // Update a doce with id
    router.put("/:id", doces.update);
  
    // Delete a doce with id
    router.delete("/:id", doces.delete);
  
    // Create a new doce
    router.delete("/", doces.deleteAll);

    // Retrieve all published Users
    // router.get("/published", users.findAllPublished);
  
    app.use('/api/doces', router);
  };