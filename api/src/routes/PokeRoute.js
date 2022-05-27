const {Router} = require("express");
const router = Router();
const {
  getPokeApi,
  getIds,
  postPokemons,
} = require("../controllers/pokemonController");

router.get("/", getPokeApi);
router.get("/:id", getIds);
router.post("/", postPokemons);

module.exports = router;
