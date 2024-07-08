const { DataTypes } = require('sequelize');
const { sqldb } = require('../config/db');
const Customer = require('./customer');

const Order = sqldb.define({
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    }, 
    customerId : {
        type : DataTypes.INTEGER,
        references : {
            model : Customer,
            key : id
        }
    },
    orderDate : {
        type : DataTypes.DATE,
        allwoNull : false
    },
    status : {
        type : DataTypes.STRING,
        allwoNull : false
    }
})

module.exports = Order;