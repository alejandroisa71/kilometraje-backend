// const express = require("express");
import express from 'express'
// const mysql = require("mysql");
import mysql from 'mysql'
// const myconn = require("express-myconnection");
import myconn from 'express-myconnection'
// const cors = require("cors");
import cors from 'cors'
// const dotenv = require("dotenv").config();
import {} from 'dotenv/config'

// const routes = require("./routes/routes");
import routesVehiculos from './routes/routesVehiculos.js'
import routesMovimientos from './routes/routesMovimientos.js'
console.log(routesVehiculos)

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

// app.use("/api/", routesVehiculos);
app.use("/api/",routesMovimientos);

//Server running----------------------------
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
