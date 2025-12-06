const mysql = require('mysql2');

module.exports = class Mysql {
  static connect() {

    const db = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    db.connect((err) => {
      if (err) {
        console.log("MySQL connection error:", err);
        throw err;
      }
      console.log("MySQL Connected");
    });

    return db;
  }
};
