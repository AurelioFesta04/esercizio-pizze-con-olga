// EXPRESS DATA
const express = require("express");
const app = express();
const port = 3000;
const errorHandler = require("./middlewares/handleErrors");

// BODY PARSER
app.use(express.json());

// Server activation
app.listen(port, () => {
    console.log("Il Server è in ascolto");
 })