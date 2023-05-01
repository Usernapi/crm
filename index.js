// Import packages
const express = require("express");
const home = require("./routes/home");
const cors = require("cors");

const multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dkpnspobs",
  api_key: "155272241166966",
  api_secret: "egxuuBejAB5fQj8dneRTUVj3ZmE",
});

// Middlewares
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var corsOptions = {
  origin: "*", // Reemplazar con dominio
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());

const upload = multer({ storage: storage }).single("file");

// Routes
app.use("/home", home);
app.use("/api/all", require("./routes/prop"));

app.use("/api/des", require("./routes/descrip"));
app.use("/api/busqueda", require("./routes/busqueda"));
app.use("/api/agregar", require("./routes/agrega"));

app.use("/api/ejemplo", require("./routes/ejemplo"));
app.use("/api/contacto", require("./routes/contactame"));
app.use("/api/contactanos", require("./routes/contactanos"));
app.use("/api/imge", require("./routes/img"));

app.use("/api/locali", require("./routes/localizacion"));

app.use("/api/cloud", require("./routes/cloud"));

app.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send("Error al cargar archivo");
    }
    console.log(req.file);
    cloudinary.uploader.upload(
      req.file.path,
      { public_id: req.file.originalname },
      function (error, result) {
        if (error) {
          console.error(error);
          return res.status(500).send("Error al cargar archivo");
        }
        console.log(result);
        // La URL de acceso público está en result.secure_url
        return res.status(200).send("Archivo cargado correctamente");
      }
    );
  });
});

app.use("/api/agreimg", require("./routes/agreimg"));

app.use("/api/ameni", require("./routes/agreamenidades"));
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
