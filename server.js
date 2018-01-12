const path = require('path');
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, '/')));

app.get('/',function(req,res){

res.sendFile('index.html');

});

app.listen(3000);
