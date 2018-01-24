/*
app-node-mysql-sandpint: Messing about to get mysql working with node.
*/

const mysql = require('mysql');

console.log("server starting..");

// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'localhost',
  user: 'mh_test_user',
  password: 'pw',
  database: 'mh_test_db'
});

//------------------------
con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('MySQL database connection established');
});

//------------------------
con.query('SELECT * FROM employees', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

//------------------------
con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
