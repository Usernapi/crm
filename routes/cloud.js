var express = require("express");
var router = express.Router();
const cloudinary = require("cloudinary").v2;
var multer = require("multer");

cloudinary.config({
  cloud_name: "dkpnspobs",
  api_key: "155272241166966",
  api_secret: "egxuuBejAB5fQj8dneRTUVj3ZmE",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("file");

router.post("/", function (req, res) {
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
module.exports = router;
