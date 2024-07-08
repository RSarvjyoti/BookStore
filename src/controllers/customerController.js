const Order = require("../models/Order");
const bcrypt = require('bcrypt');
const Customer = require("../models/customer");
const JWT = require('jsonwebtoken');
const Review = require("../models/Review");

const getCustomerOrders = async (req, res) =>{
    try{
        const customerId = req.params.id;
        const orders = await Order.findAll({where : {customerId}});
        res.json(orders);
    }catch(err){
        res.status(500).json({error : err.message});
    }
}

getCustomerOrders = async (req, res) =>{
    try{
        const {id } = req.params;
        const { page = 1, size = 10, sort = 'reviewDate' , order = 'desc'} = req.query;
        const limit = parseInt(size);
        const skip = (page - 1) * limit

        const review = await Review.find({bookId : id})
        .populate('bookId')
        .sort({[sort] : order})
        .skip(skip)
        .limit(limit);

        const totalReview = await Review.countDocuments({bookId : id});
        res.json({totalReview});
    }catch(err){
        res.status(500).json({error : err.message});
    }
}

module.exports = {getCustomerOrders};