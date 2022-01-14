const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://yfxeybcubfboqc:74620a3dcc373bc7401cd53758e942c3df26d111910968f4ea185e5e7e46dc26@ec2-52-206-124-160.compute-1.amazonaws.com:5432/d1r5jfmjv37ckd'
  
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