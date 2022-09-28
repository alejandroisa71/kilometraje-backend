import express from 'express'
const router = express.Router();



router.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("SELECT * FROM movimientos", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
});


export default router