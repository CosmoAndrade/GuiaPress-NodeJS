const Sequelize = require('sequelize')


// Criação e coniguração do banco de Dados
const connection = new Sequelize('guiapress','root','2384',{
    host: 'localhost',
    dialect:'mysql',
    timezone: '-03:00'
})

module.exports = connection;

