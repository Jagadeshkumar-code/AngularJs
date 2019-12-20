let express = require("express");
let bodyParser = require("body-parser");
let app = express();
var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'XHRAndJQueryPOSTAndGETOperations')));
 
app.get("/",function(req,res){
  res.sendFile(__dirname + "/XHRAndJQueryPOSTAndGETOperations/index.html");
});

let routes = require("./routes/routes.js")(app);

let server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});