const UserModel= require("../models/userModel")


const CreateUser= async function (req, res) {
    let user = req.body
    user.isFreeAppUser = req.isFreeAppUser
     let savedData= await UserModel.create(user)
    res.send({msg: savedData})
}

module.exports.CreateUser=CreateUser



// const createUser= async function(req, res, next) {
//     let tokenDataInHeaders= req.headers.isFreeAppUser
//     if(req.headers.isFreeAppUser==true){
//         res.send({msg:"headeris present"})
//     }
//     else{
//         res.send({msg:"header is not present"})
//     }
    
//     console.log(tokenDataInHeaders)

    // let CI = req.body

    // let authorId=book.author_id
    // if(!authorId)return res.send("author is is required" )

    // console.log( "HEADER DATA ABOVE")
    // console.log( "hey man, congrats you have reached the Handler")
    // res.send({ msg: "This is coming from controller (handler)"})
    // next()
    // }

// const createUser= async function (req, res) {
    
//     let data= req.body
//     let tokenDataInHeaders= req.headers.token
//     Get all headers from request
//     console.log("Request headers before modificatiom",req.headers)
//     Get a header from request
//     console.log(req.headers.batch)
//     console.log(req.headers["content-type"])
//     console.log(tokenDataInHeaders)
//     //Set a header in request
//     req.headers['month']='June' //req.headers.month = "June"

//     //Set an attribute in request object
//     req.anything = "everything"
    
    
//     console.log("Request headers after modificatiom",req.headers)
    
//     //Set a header in response
//     res.header('year','2022')
//     res.send({msg: "Hi"})
// }

// const createUser= async function (req, res) {
//     data=req.body
//     let allUsers= await UserModel.create(data)
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode