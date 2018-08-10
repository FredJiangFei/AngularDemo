"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var product_1 = require("./product");
var ws_1 = require("ws");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello express');
});
var products = Array(new product_1.Product(1, "iphone7", 5000), new product_1.Product(2, "vivo r11", 2000));
app.get('/api/products', function (req, res) {
    res.send(products);
});
app.get('/api/products/:id', function (req, res) {
    var product = products.find(function (x) { return x.id == req.params['id']; });
    res.send(product);
});
var server = app.listen(8000, "localhost", function () {
    console.log("Server start");
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (w) {
    w.send("send from server");
    w.on("message", function (m) {
        console.log(m);
        w.send(m + ' from server');
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (c) {
            c.send('send per 2 seconds');
        });
    }
}, 2000);
