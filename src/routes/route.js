const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/AuthorController")
const bookcontroller=require("../controllers/bookcontroller")


router.post("/createBook",bookcontroller.createBook)

router.post("/CreateAuthor",AuthorController.CreateAuthor)

router.get("/getBookByChetanBhagat", bookcontroller.getBookByChetanBhagat)

router.get("/authorofBook", bookcontroller.authorofBook)

router.get("/findBook",bookcontroller.findBook)

`````````````

module.exports = router;