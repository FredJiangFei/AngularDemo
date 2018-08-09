import * as express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello express');
});

const server = app.listen(8000, "localhost", () => {
    console.log("Server start");
});
