const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

const sdk = require("api")("@easybroker/v1.0#1jk84j1glc5flv8a");

router.get("/", async (req, res) => {
  console.log(req.query);
});

module.exports = router;
