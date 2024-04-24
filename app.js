// console.log('Hola Mundo');
require('dotenv').config(); // Que tome todas las variables de Entorno.
const Server = require('./Models/Server')

const server = new Server()

server.listen()
