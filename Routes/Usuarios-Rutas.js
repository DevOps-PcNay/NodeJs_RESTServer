const { Router } = require('express');
const router = Router();

// Para realizar validaciones varias, entre ellas del Email
const { check } = require('express-validator')


// Se importa la funcion que se definio en el "Controllers/Usuarios-Controllers"
const { usuariosGet,usuariosPut,usuariosDel,usuariosPost } = require('../Controllers/Usuarios-Controller'); 

router.get('/', usuariosGet) // NO se coloca "()", es solo una referencia.

// :id = ya viene parsiado en los parametros, por parte de "express".
router.put('/:id', usuariosPut)	// NO se coloca "()", es solo una referencia.

router.delete('/', usuariosDel)		// NO se coloca "()", es solo una referencia.

// Se agrega como un middleware 
// Se agrega como parametro a la funcion check el "correo" que es del body.

router.post('/',[check('correo','El correo no es valido').isEmail(),
],usuariosPost)		// NO se coloca "()", es solo una referencia.

module.exports = router;

