const express = require("express");
const app = express();
var path = require('path');

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get("/app" ,(req, res) => {
    res.send([1, 2, 3])
});

app.get("/app/:id/", (req, res) =>{
    let text = JSON.stringify(req.params.id)
    res.send(JSON.parse(text))
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}/`);
  });