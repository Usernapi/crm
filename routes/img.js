var express = require("express");
var router = express.Router();
var multer = require("multer");

// const upload = multer({ dest: "uploads/" });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

// router.post("/", async (req, res) => {
//   // router.post("/", upload.single("file"), (req, res, next) => {
//   //   // El archivo se ha subido correctamente, realiza las acciones que desees con él
//   //   var file = req.file;
//   console.log(req);

//   //   // Envía la URL del archivo como respuesta
//   //   var url = "https://url-del-archivo/" + file;
//   //   res.send(url);
// });

router.post("/", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("Archivo recibido");
});

module.exports = router;
