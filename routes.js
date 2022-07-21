const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("SELECT * FROM vehiculos", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
});

routes.get("/:id", (req, res) => {
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

routes.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("INSERT INTO vehiculos set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);
      res.send("Vehiculo Agregado Correctamente!");
    });
  });
});

routes.delete("/:id", (req, res) => {
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

routes.put("/:id", (req, res) => {
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

module.exports = routes;
