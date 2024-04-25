const { response, request } = require('express')
const Usuario = require ('../Models/Usuario');


// Cuando se agrega esta variable, nos mostrara el menu de la funcion que se desestructuro de "expres" llamada "Response"

const usuariosGet = (req = request, res = response) => 
{
	//res.send('Hola Mundo - Usando POO')			
	//res.json('Hola Mundo - Usando POO')
	const query = req.query;

	// Si se quiere Deescructurar:
	// http://162.0.238.251:3033/api/usuarios?q=Test&nombre=Fernando&appkey=1234567
	const { q, nombre, appkey, pagina='none'  } = req.query

	res.json({
		ok:true,
		msg:'get API - Controlador',
		query,
		appkey,
		pagina
	})
};

const usuariosPut = (req,res = response ) =>
{	
	// .params.id = Es el ID que se manda en la URL, ?id=20
	// De igual manera se puede desestructurar 

	const { id } = req.params

		res.status(400).json({
			ok:true,
			msg:'put API - Controllers',
			id:id
		})
}
const usuariosDel = (req,res = response) =>
{	
	res.json({
		ok:true,
		msg:'delete API - Controllers'
	});
}
const usuariosPost = async (req,res = response) =>
{
	// Obtiene lo que se envia en el "body" de la peticion POST.
	// Se limpia para evitar inyeccion de SQL, entre otras validaciones.
	//const envio_Body = req.body; 
	// const {nombre, edad } = req.body
	const body_contenido  = req.body;
	
	// Si en el contenido del "Body" se manda una coleccion(campo) que no existe "Mongoose" lo ignora y se grabara en el documento (tabla)
	const usuario_instancia = new Usuario(body_contenido);

	// Para grabar la Collecion en el Documento 
	// Esperar que termine de grabar
	// Si no se manda en el Body del POST las colecciones(campos) completo se queda con el mensaje de grabando, sin que termine, hasta que se aborte el programa.
	await usuario_instancia.save();


	res.status(201).json({
		ok:true,
		msg:'POST API - Controllers',
		//nombre,
		//edad
		usuario_instancia
	});
}

module.exports = {
	usuariosGet,
	usuariosPut,
	usuariosDel,
	usuariosPost
}