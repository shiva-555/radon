const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true,
    },

    prices: {
        indianPrice: Number,
        europePrice: Number,
    },
    year: { type: Number, default: 2021 },
    tags: [String],

    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean,

}, { timestamps: true });


// const userSchema = new mongoose.Schema( {
//     bookName: shiva ,
//     publish : String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //book



// // String, Number
// // Boolean, Object/json, array