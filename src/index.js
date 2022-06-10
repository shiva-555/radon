const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const assignmentMW = function (req,res,next){
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDay() + "/" + 
    currentdate.getMonth()  + "/" 
    + currentdate.getFullYear() + " @ " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":"
     + currentdate.getSeconds();
     let ip = req.ip
     let url= req.originalUrl
     console.log(`${datetime} ${ip} ${url}`)
     next()
 }
 app.use(assignmentMW)
 




mongoose.connect("mongodb+srv://Shiva-555:pBG3QBG7xnjaNHcZ@cluster0.zkrrd.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
