const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){
})

app.listen(process.env.PORT || 3000, function(){
    console.log("start")
})