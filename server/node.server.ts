import * as http from 'http'

const server = http.createServer((req, res) => {
    res.end('Helle node');
});

server.listen(8000);