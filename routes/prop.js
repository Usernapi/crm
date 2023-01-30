const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

const sdk = require("api")("@easybroker/v1.0#1jk84j1glc5flv8a");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  sdk.auth("bsytg8rgtuuhm952r71yp0lxs9y46k");
  sdk
    .getProperties({ page: id, limit: "20" })
    .then(({ data }) => {
      // console.log(data);
      // Hace que .then() devuelva una promera rechazada
      res.json(data);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
