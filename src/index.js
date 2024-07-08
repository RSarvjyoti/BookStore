const express = require('express');
const { noSql, sqldb } = require('./config/db');
const customerRoute = require('./routes/customerRoute');
const bookRoute = require('./routes/bookRoute');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('This is a home page!');
})

app.use('/customer', customerRoute);
app.use('/books', bookRoute);


app.listen(PORT,async () =>{
    try{
        await noSql(MONGO_URL);
        await sqldb.authenticate();
        console.log("NoSql database connected successfully!");
        console.log(`Server is runing at Port no. ${PORT}`);
    }catch(err){
        console.log(err);
    }
})