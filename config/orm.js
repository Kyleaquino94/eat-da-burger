var connection = require("../config/connection.js");

var orm = {
  all: function(cb) {
    connection.query("select * from burgers;", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(name, cb) {
    connection.query("INSERT INTO burgers (name, eaten) VALUES (?, false)", name, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(id, cb) {
    connection.query("UPDATE burgers Set eaten = ? where id = ?", [true, id], (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    })
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;