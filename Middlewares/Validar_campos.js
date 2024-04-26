const { validationResult } = require('express-validator');

// Se utiliza si este middleware pasa la validacion del "errors"
const validarCampos = (req,res, next) =>
{
	// Realiza las validaciones que se obtuvieron del middleware de POST, "check" 
	const errors = validationResult(req)
	if (!errors.isEmpty())
	{
		return res.status(400).json(errors)	
	}
	next(); // Sigue con el siguiente Middleware (que son los "check" que esta en "router.post"), si no lo hay entonces seria el Controlador.

}
module.exports = {
	validarCampos
}