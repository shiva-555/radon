// const { count } = require("console")
const UserModel= require("../models/userModel")
const productModel=require("../models/productModel")
const orderModel=require("../models/orderModel")

const createOrder= async function (req, res) {
    let userId=req.body.userId
    let productId=req.body.productId
    let appTypeFree=req.isFreeAppUser 
    
    let user=await UserModel.findById(userId);
    let product= await productModel.findById(productId);
    if(!user){
        res.send({msg:"user does not exist.please provide valid userId"})
      }
      else if(!product){
        res.send({msg :"product does not exist.please provide valid productId"})
    }
    else if(!appTypeFree && user.balance < product.price){
      res.send({msg:"user does not have enough balance to purches the product"})
 }
}


module.exports.createOrder = createOrder




// const createOrder= async function (req, res) {
//     let data= req.body
//     if(!order.userId) return res.send({msg:"userId is not present"})

//     let savedData= await orderModel.findById(order.userId)
//     if(!savedData) return res.send({msg:"Invalid user Id"})
// }






// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE




// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
