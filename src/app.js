const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

module.exports = app;