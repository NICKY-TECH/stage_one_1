const { join } = require("path");

const Db = require(join(__dirname, ".", "db"));

Db();

const {
  createPerson,
  updatePerson,
  getAllPersons,
  deletePerson,
  getPerson,
} = require(join(__dirname, ".", "controller", "person.controller"));

const express = require("express");

const app = express();

app.use(express.json());


const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server currently running at ${PORT}`);
});


app.get("/api", getAllPersons);

app.get("/api/:id", getPerson);

app.post("/api/:person", createPerson);

app.patch("/api/:id", updatePerson);

app.delete("/api/:id", deletePerson);

