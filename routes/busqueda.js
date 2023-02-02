const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

const sdk = require("api")("@easybroker/v1.0#1jk84j1glc5flv8a");

router.get("/", async (req, res) => {
  let ids1 = req.query.re1;
  let ids2 = req.query.re2;
  console.log(ids1 + ids2);

  try {
    await sdk.auth("bsytg8rgtuuhm952r71yp0lxs9y46k");
    await sdk
      .getProperties({
        page: "1",
        limit: "20",
        "search[property_types][]": ids1,
        "search[operation_type]": ids2,
      })
      .then(({ data }) => res.json(data))
      .catch((err) => console.error(err));
  } catch (error) {}
});

module.exports = router;
