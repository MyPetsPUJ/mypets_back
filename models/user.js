const mongoose = require('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');

const schema_user = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    contrasena: {type: String, required: true}
});

schema_user.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema_user);