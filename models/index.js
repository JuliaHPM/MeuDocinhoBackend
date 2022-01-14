const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol:'postgres',
  dialectOptions:{
    ssl:true
  }
}
  
  );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.ingredientes = require("./ingrediente.model.js")(sequelize, Sequelize);
db.receitas = require("./receita.model.js")(sequelize, Sequelize);
db.doces = require("./doce.model.js")(sequelize, Sequelize);

module.exports = db;

// dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
// //   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// }