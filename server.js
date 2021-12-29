// https://www.bezkoder.com/react-node-express-postgresql/
//https://github.com/bezkoder/node-js-postgresql-crud-example/blob/master/app/routes/turorial.routes.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// rota que pode chamar o backend
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models/index.js");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require("./routes/user.routes.js")(app);
require("./routes/ingrediente.routes.js")(app);
require("./routes/receita.routes.js")(app);
require("./routes/doce.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});