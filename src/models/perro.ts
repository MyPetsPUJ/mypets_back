import mongoose, {Schema, Document} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

interface Gato extends Document{
    nombre: string,
    edad: string,
    raza: string,
    sexo: string,
    tamano: string,
    color_ojos: string,
    tipo_pelaje: string,
    color_pelaje: string,
    situacion: string,
    desparasitado: string,
    ultima_vac: Date,
    descripcion: string,
    esquema_vac: Array<String>
}

const schema_perro: Schema = new Schema({
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
    esquema_vac: {type: Array, required: true}
});

schema_perro.plugin(uniqueValidator);

export default mongoose.model<Gato>('Pero', schema_perro);