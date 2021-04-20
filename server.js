var express = require('express');
var app = express();
var path = require('path');
const port = 3000;

app.use(express.static(__dirname + '/public')); //Serves resources from public folder

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', (req, res){
    console.log(req.body.user.join);
});

app.listen(port, () => {
    console.log(`Server runing on port`, port);
  });





