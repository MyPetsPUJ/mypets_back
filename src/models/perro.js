const mongoose = require('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');


const schema_perro = mongoose.Schema({
    nombre: {type: String, required: true},
    edad: {type: String, required: true},
    raza: {type: String, required: true},
    sexo: {type: String, required: true},
    tamano: {type: String, required: true},
    color_ojos: {type: String, required: true},
    tipo_pelaje: {type: String, required: true},
    color_pelaje: {type: String, required: true},
    situacion: {type: String, required: true},
    desparasitado: {type: String, required: true},
    ultima_vac: {type: Date, required: true},
    descripcion: {type: String, required: true},
    esquema_vac: {type: String, required: true}
});

schema_perro.plugin(uniqueValidator);

module.exports = mongoose.model('Pero', schema_perro);
