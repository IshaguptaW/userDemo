const User = require("./models/user")
const Order = require("./models/orders")
const sequelize = require("./database")

User.hasMany(Order);
Users.addScope('aciveUser', {
    where: {
        status: 1
    }
})
let userID = null;

sequelize.sync().then(result => {
    User.create({name:"Someone"}).then(user => {
        userID = user.id
        console.log(user)
        return User.createOrder({orderName: "somethinf"})
    }).then(order => {
        console.log(order)
        Order.findAll({where: userID})
    })
    console.log(result);
}).catch(err => {
    console.log(err)
})
