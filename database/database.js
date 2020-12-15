const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'Lojinha', //banco
    'postgres', //user
    'teste123', //senha
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
);

module.exports = sequelize;