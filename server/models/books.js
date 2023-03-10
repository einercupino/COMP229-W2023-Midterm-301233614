//Einer Cupino - COMP229 W2023 - 301233614
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    title: String,
    price: Number,
    author: String,
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
