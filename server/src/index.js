const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.listen(8080, () => {
      console.log(`app running http://localhost:8080`)
})