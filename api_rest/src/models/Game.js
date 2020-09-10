const Sequelize = require("sequelize");
const Connection = require("../database");

const Game = Connection.define("games", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    slug: {
        type: Sequelize.TEXT,
        allowNull: false
    }

});

module.exports = Game;