const {Router} = require("express");
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokeRoutes = require("./PokeRoute");
const typeRoutes = require("./TypeRoute");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokeRoutes);
router.use("/type", typeRoutes);

module.exports = router;
