const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookController")



router.get("/getBooksData", bookController.getBooksData)

router.post("/createBook", bookController.createBook)

router.get("/bookList", bookController.bookList)

router.get("/booksInYear", bookController.booksInYear)

router.get("/getRandomBooks", bookController.getRandomBooks)

router.post("/getParticularBooks", bookController.getParticularBooks)

router.get("/getXINRBooks" , bookController.getXINRBooks)

module.exports = router;