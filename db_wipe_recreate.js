/*
Deletes existing database and re-creates it from scratch.
*/
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'node_mysql_sandpit_user',
  password: 'sandpituser'
});

conn.connect((err) => {
  if (err) {
    console.log('Could not connect to mysql..');
    throw err;
  } else {
    console.log('Connected to mysql..')
  }
  return;
});

conn.query('DROP DATABASE IF EXISTS node_mysql_sandpit_db', (err) => {
  if (err) throw err;
});

conn.query('CREATE DATABASE node_mysql_sandpit_db', (err) => {
  if (err) {
    throw err
  } else {
    console.log('DB created..');
  };
});
