const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title : { type : String, required : true },
    auther : { type : String, required : true },
    isbn : { type : String, required : true , unique : true},
    publishDate : { type : Date, required : true}
})

const Book = model('books', bookSchema);

module.exports = Book;