const {DataTypes} = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notNull: {msg: "Can not be null"},
      },
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, //nombre unico
      validate: {
        is: /^([a-zA-Z -_]+)$/,
        notNull: {msg: "Can not be null"},
        notEmpty: true,
      },
    },

    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    attack: {
      type: DataTypes.INTEGER,
    },

    defense: {
      type: DataTypes.INTEGER,
    },

    speed: {
      type: DataTypes.INTEGER,
    },

    height: {
      type: DataTypes.INTEGER,
    },

    weight: {
      type: DataTypes.INTEGER,
    },

    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

    img: {
      type: DataTypes.STRING,
      validate: {isUrl: true},
      defaultValue:
        "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-0.png",
    },
  });
};
