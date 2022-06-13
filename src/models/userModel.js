const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    
    name:{
        type:String,
        required:true
    },
    balance:{
        type:Number,  // Default balance at user registration is 100
        default:100
    },
    address:String,
    age:Number,
    gender:{
        type:String,   // Allowed values are - “male”, “female”, “other”
        enum:['male','female','other']   
     },
     isFreeAppUser:{
         type:Boolean,  // Default false value.
         default:false
        }

         
    }
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array