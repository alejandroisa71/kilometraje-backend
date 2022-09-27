// const express = require("express");
import express from 'express'
const router = express.Router();


router.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("SELECT * FROM vehiculos", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
});

router.get("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "SELECT * FROM vehiculos WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);
        res.json(rows);
      }
    );
  });
});

router.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("INSERT INTO vehiculos set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);
      res.send("Vehiculo Agregado Correctamente!");
    });
  });
});

router.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM vehiculos WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send(`Vehiculo Eliminado!`);
      }
    );
  });
});

router.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE vehiculos set? WHERE id = ?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send(`Vehiculo ${req.params.id}  Actualizado!`);
      }
    );
  });
});

export default router
// module.exports = routes;
