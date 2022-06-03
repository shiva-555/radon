const PrintDate = function(){
    console.log (Date())
}

module.exports.PrintDate = PrintDate

const printMonth = function(){
    const a = new Date()
    const m = a.getMonth() +1
    console.log("current month is " + m )

   
} 

module.exports.printMonth = printMonth

const getBatchInfo = function(){
    console.log ("Roadon, W2D3, the topic for today is Nodejs module system")
}

module.exports.getBatchInfo=getBatchInfo


