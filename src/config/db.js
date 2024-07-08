const { connect } = require("mongoose");
const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = process.env.DB_NAME
const username = process.env.USER_NAME
const password = process.env.PASSWORD 
const hosts = process.env.HOST

  const sqldb = new Sequelize(database, username, password, {
    host: hosts,
    dialect: 'mysql'
  });

const noSql = async (url) =>{
    try{
        await connect(url);
    }catch(err){
        console.log(err);
    }
}

module.exports = { noSql, sqldb };