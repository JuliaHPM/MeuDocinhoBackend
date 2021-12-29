const db = require("../models");
const Ingrediente = db.ingredientes;
const Op = db.Sequelize.Op;

// Create and Save a new Ingrediente
exports.create = (req, res) => {
  // Validate request
//   if (!req.body.nome) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

  // Create a Ingrediente
  const ingrediente = {
    nome: req.body.nome,
    marca: req.body.marca,
    quantEmb: req.body.quantEmb,
    precoUnit: req.body.precoUnit,
    precogml: req.body.precogml,
    imagem: req.body.imagem
    // imagem: req.file.path
  };

  // Save Ingrediente in the database
  Ingrediente.create(ingrediente)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ingrediente."
      });
    });
};

// Update a Ingrediente by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Ingrediente.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ingrediente was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Ingrediente with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Ingrediente with id=" + id
        });
      });
};

// Delete a Ingrediente with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Ingrediente.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ingrediente was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Ingrediente with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Ingrediente with id=" + id
        });
      });
};

// Delete all Ingredientes from the database.
exports.deleteAll = (req, res) => {
    Ingrediente.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Ingredientes were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Ingredientes."
          });
        });
};

// Retrieve all Ingredientes from the database.
exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  
    Ingrediente.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Ingredientes."
        });
      });
};

// Find a single Ingrediente with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Ingrediente.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Ingrediente with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Ingrediente with id=" + id
        });
      });
};

// exports.findAllPublished = (req, res) => {
//     Tutorial.findAll({ where: { published: true } })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
//   };
