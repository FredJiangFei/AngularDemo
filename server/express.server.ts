import * as express from 'express'
import { Product } from './product';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello express');
});

let products: Product[] =Array<Product>(
    new Product(1,"iphone7", 5000),
    new Product(2,"vivo r11", 2000)
);

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/products/:id', (req, res) => {
    let product = products.find( x=> x.id == req.params['id']);
    res.send(product);
});

const server = app.listen(8000, "localhost", () => {
    console.log("Server start");
});
