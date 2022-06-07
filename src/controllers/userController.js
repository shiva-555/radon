const bookmodel = require('../models/bookmodel')

const createBook = async function (req, res) {
    let data= req.body
    let savedData= await bookmodel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await bookmodel.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBookData= getBookData