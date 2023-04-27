const { Router } = require("express");
const router = new Router();

const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  const url = "https://api.easybroker.com/v1/properties";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-Authorization": "bsytg8rgtuuhm952r71yp0lxs9y46k",
    },
    body: JSON.stringify({
      operations: [
        {
          active: true,
          amount: req.query.precio,
          currency: "MXN",
          type: req.query.tipo_operacion,
        },
      ],
      location: {
        name: req.query.nom_ubi,
        street: req.query.calle_ubi,
        exterior_number: req.query.numE_ubi,
        interior_number: req.query.numI_ubi,
        cross_street: req.query.cru_ubi,
        postal_code: req.query.cp_ubi,
      },
      features: ["Penthouse", "Terraza", "Planta eléctrica"],
      images: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/tupatrimonio-33a89.appspot.com/o/WhatsApp%20Image%202023-04-24%20at%208.19.56%20AM.jpeg?alt=media&token=394fd182-8709-4406-8c50-f5d997fe710d",
        },
      ],
      property_type: req.query.type_propiedad,
      title: req.query.titulo,
      description: req.query.descripcion,
      status: req.query.estado,
      private_description: req.query.descripcionpri,
      agent: req.query.agente,
      show_prices: true,
      bedrooms: req.query.dormitorios,
      bathrooms: req.query.baños,
      half_bathrooms: req.query.mbaños,
      parking_spaces: req.query.estacionamiento,
      age: 2020,
      floors: req.query.pisos,
      expenses: req.query.gastos,

      share_commission: true,
      collaboration_notes:
        "We only share commission with agencies located in the same city.",
      show_exact_location: true,
      construction_size: req.query.tamaño_const,
      lot_size: req.query.tamaño,
    }),
  };

  console.log(req.query.nom_ubi);

  fetch(url, options)
    .then((rese) => rese.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
});
module.exports = router;
