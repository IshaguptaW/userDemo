const user = require("../models/user");
const sequelize = require("../database");

async function createUser(data) {
    const t = await sequelize.transaction();
    user.create({name: data.name, transaction: t}).then(user => {
        t.commit();
    }).catch(err => {
        t.rollback();
    })
}

async function findAllUser(data) {
    let result = await user.scope('aciveUser').findAll({});
    return result
}
module.export = {
    createUser,
    findAllUser
}