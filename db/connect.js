const db = require("mongoose");

const dbOption = {
  useNewUrlParser: true,
};

const connect = db.connect("mongodb://127.0.0.1:27017/product", dbOption);
connect
  .then(() => {
    console.log("database Connect");
  })
  .catch((error) => {
    console.log("error in database connected", error);
  });

module.exports = db;
