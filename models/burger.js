var orm = require("../configuration/orm");
var burger = {
    select: function (cb) {
        orm.select("burger", function (res) {
            cb(res);
        });
    },

    insert: function (cols, vals, cb) {
        orm.insert("burger", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, condition, cb) {
        orm.update("burger", objColVals, condition, function (res) {
            cb(res);
        });
    },
    
    delete: function (condition, cb) {
        orm.delete("burger", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;