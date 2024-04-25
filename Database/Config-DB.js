const mongoose = require('mongoose');

const dbConnection = async() =>
{
	try
	{
		// await = Es para indicar que espera hasta que se realize la conexion ( como fue definido como "async"), ademas retorna una promesa
		// Se define en el archivo ".env" la cadena de conexion.
		await mongoose.connect(process.env.MONGODB_CNN,{
			//useNewUrlParser:true,				Para la version de NodeJs 20.12.1 es depreciado
			//useUnifiedTopology:true,		Para la version de NodeJs 20.12.1 es depreciado
			//useCreateIndex:true					Para la version de NodeJs 20.12.1 NO es Soportado
			//useFindAndModify:false			Para la version de NodeJs 20.12.1 NO es Soportado
		});

		console.log ("Base De Datos Online");


	} catch (error)
	{
		console.log(error)
		throw new Error ('Error al iniciar al conectarse a la Base De Datos ')
	}
	
}
module.exports = {
	dbConnection
}