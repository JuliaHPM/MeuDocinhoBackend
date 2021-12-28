module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "635634",
    DB: "MeuDocinho",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };