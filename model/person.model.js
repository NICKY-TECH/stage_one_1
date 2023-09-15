const { Schema, model } = require("mongoose");

const personSchema = new Schema({
  name: String,
  age: "String",
  gender: "String",
});

const Person = model("Person", personSchema);

module.exports = {
  Person,
};
