const {Schema, model } =require ('mongoose');

// Es el Modelo de Usuarios:
const UsuarioSchema = Schema
({
	nombre: 
	{
		type: String,
		requered: [true,'El nombre es obligatorio']
	},
	correo:
	{
		type: String,
		requered: [true,'El correo es obligatorio'],
		unique:true
	},
	password:
	{
		type: String,
		requered: [true,'La contrasena es obligatoria']		
	},
	img:
	{
		type: String		
	},
	rol:
	{
		type: String,	
		requered:true,
		enum:['ADMIN_ROLE','USER_ROLE']
	},
	estado:
	{
		type: Boolean,	
		default:true		
	},
	google:
	{
		type: Boolean,	
		default:false
	}		
});


module.exports = model('Usuario',UsuarioSchema);
// Mongoose le agrega a "Usuarios" que es la coleccion.

