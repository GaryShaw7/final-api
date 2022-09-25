const jsonServer = require('json-server'); // use package
const server = jsonServer.create(); // invoke
const router = jsonServer.router('new-db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
