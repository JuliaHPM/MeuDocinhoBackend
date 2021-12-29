const db = require("../models");
const Doce = db.doces;
const Op = db.Sequelize.Op;

// Create and Save a new Doce
exports.create = (req, res) => {
  // Validate request
//   if (!req.body.nome) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

  // Criar um Doce
  const doce = {
    nome: req.body.nome,
    categoria: req.body.categoria,
    receitas: req.body.receitas,
    tempoPrep: req.body.tempoPrep,
    rendimento: req.body.rendimento,
    custo: req.body.custo,
    margemLucro: req.body.margemLucro,
    valorTotal: req.body.valorTotal,
    valorTotalMargem: req.body.valorTotalMargem,
    anotacoes: req.body.anotacoes,
    imagem: req.body.imagem
  };

  // Salvar o Doce no Banco
  Doce.create(doce)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Doce."
      });
    });
};

// Update a Doce by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Doce.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Doce was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Doce with id=${id}. Maybe Doce was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Doce with id=" + id
        });
      });
};

// Delete a Doce with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Doce.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Doce was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Doce with id=${id}. Maybe Doce was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Doce with id=" + id
        });
      });
};

// Delete all Doces from the database.
exports.deleteAll = (req, res) => {
    Doce.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Doces were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Doces."
          });
        });
};

// Retrieve all Doce from the database.
exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  
    Doce.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Doces."
        });
      });
};

// Find a single Doce with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Doce.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Doce with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Doce with id=" + id
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
