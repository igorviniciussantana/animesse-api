require("dotenv-safe").config();
const express = require("express");
const path = require("path");
const app = express();

var cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const { joias } = require("./models");
const { categoria } = require("./models");
const { status } = require("./models");

app.get("/", async (req, res) => {
    var retorna = await joias.findAll();
    res.json(retorna);
});

app.listen(3000, function () {
  console.log("Server rodando");
});
