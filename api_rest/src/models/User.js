const Sequelize = require("sequelize");
const Connection = require("../database");

const User = Connection.define("users", {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,        
    }
});

module.exports = User;