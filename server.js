const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const cors = require("cors");
const dotenv = require("dotenv").config();

const routes = require("./routes");

const app = express();
app.set("port", process.env.PORT || 9000);
const dbOptions = {
  host: process.env.DB_HOST,
  port: "3306",
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

app.use("/api/", routes);

//Server running----------------------------
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
