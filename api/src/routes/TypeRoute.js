const {Router} = require("express");
const {getTypes} = require("../controllers/pokemonController.js");
const router = Router();

router.use("/", getTypes);

module.exports = router;
