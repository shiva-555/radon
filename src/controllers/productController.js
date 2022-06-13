
const productModel= require("../models/productModel")
const createProduct= async function (req, res) {
    let data= req.body
     let savedData= await productModel.create(data)
    res.send({msg: savedData})
}
module.exports.createProduct=createProduct


// const createProduct= async function (req, res) {
//     let data = req.body
//     let authorId = data.dauthor_id
//     if(!authorId) return res.send({msg: 'product is mandate'})

//     let savedData= await productModel.create(data)
//     res.send({data:savedData})
// }

// module.exports.createProduct=createProduct
