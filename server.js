const http = require('http');
const port = process.env.PORT || '3000';

const server = http.createServer((req, res) => {
    res.end('Coucou le monde !');
});
server.listen(port);
console.log(`Running server on ${port}`);
