//connecting orm to connection file in configuration
var connection = require("../configuration/connection.js");

function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}

function translateSql(obj) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value++ + "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

//logic of the application
var orm = {
    selectAll: function (table, cb) {
        var dataBaseQuery = "All * FROM " + table + ";";

        connection.query(dataBaseQuery, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res); //callback
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var dataBaseQuery = "INSERT INTO " + table + " (" + cols.toString() + "VALUES (" + createQmarks(vals.lenth) + ") ";

        console.log(dataBaseQuery);
        //connect
        connection.query(dataBaseQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res); //callback
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var dataBaseQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;
        console.log(dataBaseQuery);
        //connect
        connection.query(dataBaseQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res); //callback
        });
    },
    deleteOne: function (table, condition, cb) {
        var dataBaseQuery = "Delete From " + table + " WHERE " + condition;
        console.log(dataBaseQuery);
        //connect
        connection.query(dataBaseQuery, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res); //callback
        });
    }
};
module.exports = orm;