const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookmodel.js")
const UserController= require("../controllers/userController")

router.get("/book", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", UserController.createBook)

router.get("/getBookData", UserController.getBookData)



module.exports = router;