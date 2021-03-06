var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    //console.log("burger.all");
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    //console.log("burger.insertOne");
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
      //console.log("burger.updateOne");
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;