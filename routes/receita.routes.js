module.exports = app => {
    const receitas = require("../controllers/receita.controller.js");
  
    var router = require("express").Router();
  
    // Create a new receita
    router.post("/", receitas.create);
  
    // Retrieve all receitas
    router.get("/", receitas.findAll);
  
    // Retrieve a single receita with id
    router.get("/:id", receitas.findOne);
  
    // Update a receita with id
    router.put("/:id", receitas.update);
  
    // Delete a receita with id
    router.delete("/:id", receitas.delete);
  
    // Create a new receita
    router.delete("/", receitas.deleteAll);

    // Retrieve all published Users
    // router.get("/published", users.findAllPublished);
  
    app.use('/api/receitas', router);
  };