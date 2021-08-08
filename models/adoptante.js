const mongoose = require('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');


const schema_adoptante = mongoose.Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    fecha_nacimiento:{type: Date, required: true},
    genero: {type: String, required: true},
    localidad: {type: String, required: true},
    correo: {type: String, required: true, unique: true},
    num_celular: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

schema_adoptante.plugin(uniqueValidator);



module.exports = mongoose.model('Adoptante', schema_adoptante);