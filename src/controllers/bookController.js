const Review = require("../models/Review");
const Customer = require("../models/cutomer");

const getBookReview = async (req, res) =>{
    try{
        const bookId = req.params.id;
        const review = await Review.find({bookId}).populate('bookId');
        const reviewDetails = await Promise.all(review.map(async review => {
            const customer = await Customer.findByPk(review.customerId);
            return { review, customer };
        }));
        res.json(reviewDetails);
    }catch(err){
        res.status(500).json({error : err.message});
    }
}


module.exports = {getBookReview};