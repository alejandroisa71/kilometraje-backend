// const express = require("express");
import express from 'express'
// const mysql = require("mysql");
import mysql from 'mysql'
// const myconn = require("express-myconnection");
// import myconn from 'express-myconnection'
// const cors = require("cors");
import cors from 'cors'
// const dotenv = require("dotenv").config();
import {} from 'dotenv/config'
// import dbOptions from './db/index.js'

// const routes = require("./routes/routes");
import routesVehiculos from './routes/routesVehiculos.js'
import routesMovimientos from './routes/routesMovimientos.js'
// console.log(routesVehiculos)

const app = express();
app.set("port", process.env.PORT || 9000);
//  dbOptions()


app.use(express.json());
app.use(cors());

//routes---------------------------------------
app.get("/", (req, res) => {
  res.send("Wecome to my api");
});

app.use("/api/", routesVehiculos);
app.use("/api/",routesMovimientos);

//Server running----------------------------
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
