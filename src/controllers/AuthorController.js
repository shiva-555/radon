const {count} = require("console")
const AuthorModel=require("../models/AuthorModel")
const bookModel = require("../models/bookModel")

const CreateAuthor= async function (req,res){
    let data= req.body
    let savedData=await AuthorModel.create(data)
    res.send({msg: savedData})
}

const ChetanBhagat=async function (req,res){
    let author_id =await AuthorModel.find({author_name:"ChetanBhagat"}).select({author_id: 1})
    res.send(author_id)
    let books= await bookModel.find(author_id[0])
    res.send(bookscount)
}

module.exports.CreateAuthor=CreateAuthor
module.exports.ChetanBhagat=ChetanBhagat