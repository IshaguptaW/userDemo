const Sequelize = require("sequelize");
const sequelize = require("../database");

const Order = sequelize.define( "order", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    orderName: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
 module.exports = Order