var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(3000);

app.get("/", function(req, res){
    // res.send("<p color=red>Well come on</p>");
    res.sendFile(__dirname + "/view/index.html");
});
app.get("/gioi-thieu.html", function(req, res){
    res.sendFile(__dirname + "/view/about.html");
});
// lấy parameters(tham số) trên thanh địa chỉ
app.get("/tinhtong/:so1/:so2", function(req, res){
    // res.sendFile(__dirname + "/view/index.html");
    var n = req.params.so1;
    n = parseInt(n);
    var m = parseInt(req.params.so2);
    var t = n + m;
    res.send("<h1>Kết quả:" + " "+ t + "</h1>");
});