module.exports = (sequelize, Sequelize) => {
    const Ingrediente = sequelize.define("ingrediente", {
      nome: {
        type: Sequelize.TEXT
      },
      marca: {
        type: Sequelize.STRING
      },
      quantEmb: {
        type: Sequelize.STRING
      },
      precoUnit: {
        type: Sequelize.STRING
      },
      precogml: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.STRING
      }
    });
  
    return Ingrediente;
  };