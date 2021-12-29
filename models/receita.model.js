module.exports = (sequelize, Sequelize) => {
    const Receita = sequelize.define("receita", {
      nome: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      ingredientes: {
        type: Sequelize.STRING
      },
      tempoPrep: {
        type: Sequelize.STRING
      },
      rendimento: {
        type: Sequelize.STRING
      },
      custo: {
        type: Sequelize.STRING
      },
      anotacoes: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.STRING
      }
    });
  
    return Receita;
  };
