import express from 'express'
import mysql from 'mysql'
import myconn from 'express-myconnection'
import cors from 'cors'
import {} from 'dotenv/config'

// const routes = require("./routes/routes");
import routesVehiculos from './routes/routesVehiculos.js'
import routesMovimientos from './routes/routesMovimientos.js'


const app = express();
app.set("port", process.env.PORT || 9000);
const dbOptions = {
  host: process.env.DB_HOST,
  port: "3306",
  password:process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: "kilometraje",
};

//middleware--------------------------------------------------------
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());
app.use(cors());

//routes---------------------------------------
app.get("/", (req, res) => {
  res.send("Wecome to my api");
});

app.use("/api/vehiculos", routesVehiculos);
app.use("/api/movimientos",routesMovimientos);

//Server running----------------------------
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
