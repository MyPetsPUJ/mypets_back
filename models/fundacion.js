const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema_fundacion = mongoose.Schema({
    nombreFund: {type: String, required: true},
    nombreEncar: {type: String, required: true},
    apellidosEncar: {type: String, required: true},
    fecha_creacion: {type: Date, required: true},
    localidad: {type: String, required: true},
    correo: {type: String, required: true},
    num_celular: {type: String, required: true},
    contrasena: {type: String, required: true},
});

schema_fundacion.plugin(uniqueValidator);

module.exports = mongoose.model('Fundacion', schema_fundacion);