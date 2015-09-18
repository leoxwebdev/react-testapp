var express = require("express");
var bodyParser = require("body-parser");

var mysql = require('mysql');


/* Express configuration */
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'test_db'
});

connection.connect(function(err){
    if(!err) {
        console.log("Connected to db...");
    } else {
        console.log("Connecting error...");
    }
});


app.get("/", function(req, res) {
    res.sendFile("index.html");
});

app.post("/submit-order", function(req, res) {
    var item = req.body;
    var query = "INSERT INTO purchases (amount, phone) values ('" + item.amount + "','" + item.phone +  "')";

    connection.query(query, function(err) {
        if (err) console.log(err);
        else console.log("inserted into db", item);
    });

    res.send();
});

app.listen(8080);