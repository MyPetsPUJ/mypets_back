import mongoose, {Schema, Document} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

interface Animal extends Document {
    nombre: String;
    edad: String;
    raza: String;
    sexo: String;
    tamano: String;
    color_ojos: String;
    tipo_pelaje: String;
    situacion: String;
    desparasitado: String;
    ultima_vac: String;
    descripcion: String;
    urlImg: String;
    esquema_vac: String;
    tipo_animal: String;
}

const schema_animal: Schema = new Schema({
    nombre: {type: String, required: true},
    edad: {type: String, required: true},
    raza: {type: String, required: true},
    sexo: {type: String, required: true},
    tamano: {type: String, required: true},
    color_ojos: {type: String, required: true},
    tipo_pelaje: {type: String, required: true},
    situacion: {type: String, required: true},
    desparasitado: {type: String, required: true},
    ultima_vac: {type: String, required: true},
    descripcion: {type: String, required: true},
    urlImg: {type: String},
    esquema_vac: {type: String, required: true},
    tipo_animal: {type: String, required: true},
}); 

schema_animal.plugin(uniqueValidator);

export default mongoose.model<Animal>('Animal', schema_animal);