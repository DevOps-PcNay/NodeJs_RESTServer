const { Schema, model } = require ('mongoose')

// Creando el Schema (Coleccion , "Tabla")
const RoleSchema = Schema ({
	rol:
	{
		type: String,
		requered: [true,'El Rol es obligatorio']
	}
})

module.exports = model('Role',RoleSchema)
