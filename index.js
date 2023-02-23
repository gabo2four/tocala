import { app } from "./src/app";
const mongoose = require("mongoose");
require("dotenv").config();

app.listen(3001, () =>
  console.log("listening on port http://localhost:3001")
);
