const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  let ids1 = req.query.re1;
  let ids2 = req.query.re2;
  let ids3 = req.query.re3;

  datos = [];

  const url =
    "https://api.easybroker.com/v1/properties?page=" +
    `${ids3}` +
    " &limit=20&search[property_types][]=" +
    `${ids1}` +
    "&search[operation_type]=" +
    `${ids2}` +
    "&search[statuses][]=published";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-Authorization": "bsytg8rgtuuhm952r71yp0lxs9y46k",
    },
  };

  fetch(url, options)
    .then((rese) => rese.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
});

module.exports = router;
