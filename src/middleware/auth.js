const  jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.TOKEN 

const authenticate = (req, res, next) =>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({message : 'Access Token not provide'});
    }
    try{
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    }catch(err){
        res.status(400).json({message : "Invalid token"});
    }
}

const authorize = (roles) => (req, res, next) =>{
    if(!roles.includes(req.user.role)){
        return res.status(403).json({message : 'Valid'})
    }
    next();
}

module.exports = { authenticate, authorize };