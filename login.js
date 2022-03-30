var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
 var cors = require('cors');


var app = express();

app.use(bodyParser.json());
// app.use(cors());

var con = mysql.createConnection({
    host: "localhost",
    user: "patel",
    password: "12345",
    database: "login"
});

con.connect(function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("connection succesfully");
    }
});
app.post("/api/login", function (req, res) {
    var data = {
              email:req.body.email,
              password:req.body.password

    };
    let sqlQuery = "INSERT INTO login SET ?";
    let query = con.query(sqlQuery, data, function (err, result) {
        if (err) throw err;
        res.send(JSON.stringify({ "status":200, "response":result }));
    });
});





app.listen(5000, () => {
    console.log("server running");
});
