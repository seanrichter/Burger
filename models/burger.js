//require orm
var orm = require("../configuration/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        });
    }
    insert: function (cols, vals, cb) {
        orm.selectAll("burger", cols, vals, function (res) {
            cb(res);
        });
    }
    update: function (objColVals, condition, cb) {
        orm.selectAll("burger", objColVals, condition, function (res) {
            cb(res);
        });
    }
    delete: function (condition, cb) {
        orm.selectAll("burger", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;