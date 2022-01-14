module.exports = (sequelize, Sequelize) => {
    const Doce = sequelize.define("doce", {
      nome: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      receitas: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue:[]
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
      margemLucro: {
        type: Sequelize.STRING
      },
      valorTotal: {
        type: Sequelize.STRING
      },
      valorTotalMargem: {
        type: Sequelize.STRING
      },
      anotacoes: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.STRING
      }
    });
  
    return Doce;
  };
