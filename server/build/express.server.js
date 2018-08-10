"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var product_1 = require("./product");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello express');
});
var products = Array(new product_1.Product(1, "iphone7", 5000), new product_1.Product(2, "vivo r11", 2000));
app.get('/products', function (req, res) {
    res.send(products);
});
app.get('/products/:id', function (req, res) {
    var product = products.find(function (x) { return x.id == req.params['id']; });
    res.send(product);
});
var server = app.listen(8000, "localhost", function () {
    console.log("Server start");
});
