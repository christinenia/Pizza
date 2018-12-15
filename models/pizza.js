// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var pizza = {
  all: function(cb) {
    orm.all("pizza", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("pizza", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("pizza", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("pizza", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = pizza;
