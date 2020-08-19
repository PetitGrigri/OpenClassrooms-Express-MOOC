const http = require('http');
const app = require('./app');

const port = process.env.PORT || '3000';

app.set('port', port); // Usefull ?
app.listen(port);

const server = http.createServer(app);


console.log(`Running server on ${port}`);
