const { count } = require("console")
const bookModel= require("../models/bookModel")
const AuthorModel=require("../models/AuthorModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookByChetanBhagat=async function(req,res) {
    let data=await AuthorModel.find({authorName:"chetan Bhagat"}).select("author_id")
    let bookdata=await bookModel.find({author_id:data[0].author_id})
    res.send({msg:bookdata})
}


const authorofBook=async function(req,res){
    let data = await bookModel.findOneAndUpdate({bookName:"Two States"},{$set:{price:100}},{new:true})
    let C_ID= await bookModel.find({name:"Two states"}).select({author_id:1,_id:0})
    const price = data.price
   let B_ID= await AuthorModel.find(C_ID[0]).select({author_name:1,_id:0})
   //console.log(B_ID)
    res.send({B_ID,price})
}


const findBook= async function(req,res){
    let book=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
        let B_ID= await AuthorModel.find({author_id: book.map(x=>x.author_id)}).select({author_name:1,_id:0})
        res.send({B_ID})}


module.exports.findBook=findBook
module.exports.createBook=createBook
module.exports.getBookByChetanBhagat=getBookByChetanBhagat
module.exports.authorofBook=authorofBook








module.exports.createBook= createBook
