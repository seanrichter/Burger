//Dependencies
var mysql = require("mysql");

//Creating connection to the MYSQL DATABASE
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Guitarsmr1014Stella",
    database: "burger_db"
});
connection.connect();
module.exports = connection;