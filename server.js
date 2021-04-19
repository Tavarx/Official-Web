const express = require("express");
const app = express();
var path = require('path');
const port = 3000;

app.get("/", (req, res) => {
    console.log("User joined page");
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
    console.log(`Server runing on port`, port);
  });
