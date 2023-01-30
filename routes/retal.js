const { Router } = require("express");
const router = new Router();

const sdk = require("api")("@easybroker/v1.0#1jk84j1glc5flv8a");

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    sdk.auth("bsytg8rgtuuhm952r71yp0lxs9y46k");
    sdk
      .getProperties({
        page: id,
        limit: "20",
        "search[property_types][]": "all",
        "search[operation_type]": "sale",
        "search[statuses][]": "rental",
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.error(err));
  } catch (error) {}
});

module.exports = router;
