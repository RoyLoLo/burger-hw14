const mysql = require(`mysql`);
const conn = mysql.createConnection({
  host : `localhost`,
  port : 3306,
  user : `root`,
  password : ``,
  database : `burger_db`
});

conn.connect((err)=>{
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id: ${conn.threadId}`);
});

module.exports = conn;


