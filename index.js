import { app } from "./src/app";
const mongoose = require("mongoose");
require("dotenv").config();

// Conexión MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas :v/"))
  .catch((error) => console.error(error));

app.listen(3001, () =>
  console.log("listening on port http://localhost:3001")
);
