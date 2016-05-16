var express = require ("express")
var fs = require ("fs")
var app = express()

app.set ("views","src/views")
app.set("view engine", "jade")
app.get("/", function (req,res){
    fs.readFile("resources/users.json" , function (err ,data){
        if (err)
        {
            console.log(err)
        }
        
        var parsedData = JSON.parse(data)
        res.render("form" , {users: parsedData.userArr})
    })
})

app.listen(3000)