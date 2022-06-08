const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
//     year: Number
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },

   
//     sales: {type: Number, default: 10}
// }, { timestamps: true });

const bookSchema = new mongoose.Schema( {
    bookName: { type: String, required:true },
    authorName: String, 
    price : {
        indianPrice : String,
        europePrice : String,
    },
    booksDetails: {
    Totalbookpages: String,
    stockAvailable : Boolean,
    authorName: String, 
    year: String,
    },

    tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
