const path = require("path");
require("dotenv").config({ path: path.join(__dirname, '.', ".env") });
const mongoose = require("mongoose");

const Db = () => {
  mongoose
    .connect(process.env.MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      listen
    })
    .then(() => {
      console.log("running");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = Db;
