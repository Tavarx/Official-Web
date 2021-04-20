var express = require('express');
var app = express();
var path = require('path');
const port = 3000;
var joinCounter = 0;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body.user.join, joinCounter, "joined page");
    joinCounter++;
});

app.listen(port, () => {
    console.log(`Server runing on port`, port);
  });




