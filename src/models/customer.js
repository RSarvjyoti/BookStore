const { DataTypes } = require('sequelize');
const { sqldb } = require('../config/db');

const Customer = sqldb.define('Customer', {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    }, 
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

module.exports = Customer;