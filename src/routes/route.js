const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();


router.get('/movies', function (req, res) {
    arr=["thor","IromMan","Hulk","SpiderMan"]
  
    
    res.send(arr)
});




// router.get('/movies/:indexNumber', function (req, res) {
//     arr=["thor","IromMan","Hulk","SpiderMan"]
//     const d = req.params

    
//     res.send (arr[d.indexNumber])
// });





router.get('/movies/:indexNumber', function (req, res) {
    arr=["thor","IromMan","Hulk","SpiderMan"]
    const d = req.params
    const e = d.indexNumber
    if(e<=arr.length-1){
        res.send (arr[d.indexNumber])
    }else{
      res.send ("error message")}
});



router.get('/film', function (req, res) {
    arr = [ {
        "id": "1",
        "name": "The Shining"
       }, {
        "id": "2",
        "name": "Incendies"
       }, {
        "id": "3",
        "name": "Rang de Basanti"
       }, {
        "id": "4",
        "name": "Finding Nemo"
       }]
       res.send(arr)
    });



    router.get('/films/:filmsId' , function (req, res){
        arr1= [ {
            id: "1",
            name: "The Shining"
           }, {
            id: "2",
            name: "Incendies"
           }, {
            id: "3",
            name: "Rang de Basanti"
           }, {
            id: "4",
            name: "Finding Nemo"
          
        }]
        const g = req.params
        const h = g.filmsId-1
       
        if(h>arr1.length|| h<=0){

            res.send("movie doesnot exist")
        }
        else{
            res.send(arr1[h].name)
            

        }

    });



// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })


module.exports = router;
// adding this comment for no reason