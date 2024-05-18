const { Router } = require('express');
const router = Router();

// Para realizar validaciones varias, entre ellas del Email
const { check } = require('express-validator')
const { Role } = require('../Models/Role')



// Se importa la funcion que se definio en el "Controllers/Usuarios-Controllers"
const { usuariosGet,usuariosPut,usuariosDel,usuariosPost } = require('../Controllers/Usuarios-Controller'); 

const { validarCampos } = require('../Middlewares/Validar_campos');

router.get('/', usuariosGet) // NO se coloca "()", es solo una referencia.

// :id = ya viene parsiado en los parametros, por parte de "express".
router.put('/:id', usuariosPut)	// NO se coloca "()", es solo una referencia.

router.delete('/', usuariosDel)		// NO se coloca "()", es solo una referencia.

// Se agrega como un middleware 
// Se agrega como parametro a la funcion check el "correo" que es del body.

router.post('/',[
	check('nombre','El nombre es obligatorio').not().isEmpty(), // no debe estar vacio
	check('password','El password debe ser de mas de 6 caracteres').isLength({ min:6}),
	check('correo','El correo no es valido').isEmail(),
	// check('rol','Rol no valido').isIn(['ADMIN_ROLE','USER_ROLE']), Se desactiva porque la validacion sera a la Base de Datos.	
	// Esta validando con la base de datos de MongoDB	
	check('rol').custom(async (rol = '') => {
		const existeRol = await Role.findOne({rol});	// Busca ek "Rol" en la Coleccion de "Roles"		

		if (!existeRol) // Si no existe
		{
			// Para manejar los errores personalizados.
			// Que es atrapado en el "custom"
			throw new Error(`El Rol ${ rol } no esta registrado en la Base De Datos`) 
		}
		else
		{
			// alert("Se encontro")
			console.log("Se encontro !!!! ")
		}	
	}),
		// Esta funcion revisa todos los errores generados por todos los middleware(check) anteriores, si los encuentra hasta que llegaria y no pasa al controllers "suariosPost"
		validarCampos 	//const { validarCampos } = require('../Middlewares/Validar_campos');	

],usuariosPost)		// NO se coloca "()", es solo una referencia.

module.exports = router;

