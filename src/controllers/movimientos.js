import myconn from '../db/index.js'
//middleware--------------------------------------------------------
app.use(myconn(mysql, dbOptions, "single"));

export const getData = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("SELECT * FROM movimientos", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
};
