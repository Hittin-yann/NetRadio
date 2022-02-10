const mysql = require("mysql");

// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'netradio'
});

db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = db;