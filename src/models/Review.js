const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
   bookId : { type : Schema.Types.ObjectId, ref : 'Book', required : true },
   customerId : { type : Number, required : true },
   review : { type : String , required : true },
   rating : { type : Number, required : true },
   reviewDat : { type : Date, default : Date.now }
})

const Review = model('books', reviewSchema);

module.exports = Review;