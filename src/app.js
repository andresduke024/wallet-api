const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { routes } = require("./router/router.js");

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

routes.forEach(element => {
    app.use(`/api/${element.path}`, element.router);
});

module.exports = app; 