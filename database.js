const Sequelize = require("sequelize");

const sequelize = new Sequelize("users", "root", "password", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize