const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  const url = "https://api.easybroker.com/v1/properties/" + req.query.id;
  const options = {
    method: "PATCH",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-Authorization": "bsytg8rgtuuhm952r71yp0lxs9y46k",
    },
    body: JSON.stringify({ features: req.query.seleccion }),
  };

  fetch(url, options)
    .then((rese) => rese.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
});
module.exports = router;
