// Import packages
const express = require("express");
const home = require("./routes/home");
const cors = require("cors");

// Middlewares
const app = express();

var corsOptions = {
  origin: "*", // Reemplazar con dominio
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/home", home);
app.use("/api/users", require("./routes/prop"));

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
