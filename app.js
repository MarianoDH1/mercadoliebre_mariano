const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.resolve(__dirname + '/public');

app.use( express.static(publicPath) );

app.get("/", function(req,res){
    res.sendFile(__dirname + '/Views/home.html')
})

 app.listen(PORT, function(){console.log('Servidor corriendo en el puerto 3000')})

 
 app.get("/register", function(req,res){
    res.sendFile(__dirname + '/Views/register.html')
})

app.get("/login", function(req,res){
    res.sendFile(__dirname + '/Views/login.html')
})

