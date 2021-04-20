var express = require('express');
var app = express();
var path = require('path');
const port = 3000;

app.use(express.static(__dirname + '/public')); //Serves resources from public folder

app.get("/", (req, res) => {
    console.log("User joined page");
});

app.listen(port, () => {
    console.log(`Server runing on port`, port);
  });





