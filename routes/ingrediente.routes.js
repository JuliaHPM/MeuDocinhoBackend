module.exports = app => {
    const ingredientes = require("../controllers/ingrediente.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Ingrediente
    router.post("/", ingredientes.create);
  
    // Retrieve all Ingrediente
    router.get("/", ingredientes.findAll);
  
    // Retrieve a single Ingrediente with id
    router.get("/:id", ingredientes.findOne);
  
    // Update a Ingrediente with id
    router.put("/:id", ingredientes.update);
  
    // Delete a Ingrediente with id
    router.delete("/:id", ingredientes.delete);
  
    // Create a new Ingrediente
    router.delete("/", ingredientes.deleteAll);

    // Retrieve all published ingredientes
    // router.get("/published", users.findAllPublished);
  
    app.use('/api/ingredientes', router);
  };