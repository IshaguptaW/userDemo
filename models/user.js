const Sequelize = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})
 module.exports = User