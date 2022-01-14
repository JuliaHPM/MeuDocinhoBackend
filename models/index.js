const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol:'postgres',
  port: 5432,
  dialectOptions:{
    ssl:{
      require: true,
      rejectUnauthorized: false
    }
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


//"postgres://postgres:635634@localhost:5432/MeuDocinho"

// const sequelize = new Sequelize("MeuDocinho", "postgres", "635634", {
//   host: "localhost",
//   dialect: "postgres",
// //   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });