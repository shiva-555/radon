const express = require('express');
const lodash= require("lodash");
const externalModule = require('../logger/logger')
const module1= require('../util/helper')
const Module2= require('../validator/formatter')


const router = express.Router();



router.get('/fromPairs', function (req, res) {
        const h = [["horror","The Shining "] , ["drama","Titanic"], ["thriller", "Shutter Island"],["fantasy","PansLabyrinth"]]

        console.log(lodash.fromPairs(h))
        res.send("new test")
    })

router.get('/hello', function (req, res) {
  
    let a = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"]

    console.log(lodash.chunk(a,4));
    res.send("the api testing")
    });
    

    let b = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(b));

    let c = [1,2,3,4]
    let d = [3,4,5,6]
    let e = [6,7,8,9]
    let f = [9,10,11,12]
    let g = [12,13,14,15]

    console.log(lodash.union(c,d,e,f,g))
   

router.get('/test-me', function (req, res) {
externalModule.Welcome()
module1.PrintDate()
module1.printMonth()
module1.getBatchInfo()
Module2.trim()
Module2.changetoLowerCase()
Module2.changeToUpperCase()
    res.send("the date.")


    

});



module.exports=router;

