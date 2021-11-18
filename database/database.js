const Sequelize = require("sequelize")
const connection = new Sequelize('shukaku', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection