//Dependencies
var mysql = require("mysql");

//Creating connection to the MYSQL DATABASE
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Guitarsmr1014Stella",
    database: "burger_db"
});
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export the module
module.exports = connection;