const db = require("../models");
const Receita = db.receitas;
const Op = db.Sequelize.Op;

// Create and Save a new Receita
exports.create = (req, res) => {
  // Validate request
//   if (!req.body.nome) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

  // Create a Receita
  const receita = {
    nome: req.body.nome,
    categoria: req.body.categoria,
    ingredientes: req.body.ingredientes,
    tempoPrep: req.body.tempoPrep,
    rendimento: req.body.rendimento,
    custo: req.body.custo,
    anotacoes: req.body.anotacoes,
    imagem: req.body.imagem
  };

  // Save Receita in the database
  Receita.create(receita)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Receita."
      });
    });
};

// Update a Receita by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Receita.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Receita was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Receita with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Receita with id=" + id
        });
      });
};

// Delete a Receita with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Receita.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Receita was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Receita with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Receita with id=" + id
        });
      });
};

// Delete all Receitas from the database.
exports.deleteAll = (req, res) => {
    Receita.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Receitas were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Receitas."
          });
        });
};

// Retrieve all Receitas from the database.
exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  
    Receita.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Receitas."
        });
      });
};

// Find a single Receita with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Receita.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Receita with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Receita with id=" + id
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
