const express = require('express')
const cors = require('cors')

class Server 
{
	constructor()
	{
		this.app = express()
		this.port = process.env.PORT || 4200
		// Es importante la ubicacion de la siguiente linea debe estar antes de las dos ultimas.
		this.usuariosPath = '/api/Usuarios';
		
		// Middlewares = Anaden mas funcional al Web Server, es una funcion que se siempre se va ejecutar cuando se levante el servidor
		this.middlewares();

		// Rutas de la aplicacion.
		this.routes()
	}

	// Definiendo Metodos

	// rutas
	routes()
	{
		// Rutas del modulo "Usuarios"
		this.app.use(this.usuariosPath,require('../Routes/Usuarios-Rutas'));
	} // routes()

	middlewares()
	{
		// Haste el momento el que se esta usando es el de la Carpeta Publica.
		//.use() = Para indicarle que se van a utilizar los Middlewares

		// cors = Proteger el servidor NodeJs, restringuiendo ciertas paginas.
		this.app.use(cors());

		// Lectura y parseo del body
		// Obtiene los datos que se envian del POST, la va a serializar en formato JSon.
		this.app.use (express.json());

		// Directorio publico
		// Lo sustituye a la ruta raiz, por lo que no despliega la leyenda : Hola Mundo , Programa...
		// Para desplegar el mensaje anterior se debe crear una ruta.
		this.app.use(express.static('Public')) // La carpeta que nos interesa publicar.

	} // middlewares()

	listen()
	{
		this.app.listen(this.port, () => {
		console.log('Servidor corriendo en puertos ',this.port);
		});
	}

} // class Server 

module.exports = Server;
