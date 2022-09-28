import myconn from 'express-myconnection'
 const dbOptions = {
    host: process.env.DB_HOST,
    port: "3306",
    password:process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: "kilometraje",
  };

  export default myconn