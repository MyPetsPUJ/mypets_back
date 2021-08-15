import mongoose, {Schema, Document} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

interface Gato extends Document{
    nombre: string,
    edad: string,
    raza: string,
    sexo: string,
    color_ojos: string,
    tipo_pelaje: string,
    situacion: string,
    ultima_vac: Date,
    desparasitado: string,
    descripcion: string,
    esquema_vac: Array<String>
}

const schema_gato: Schema = new Schema({
    nombre: {type: String, required: true},
    edad: {type: String, required: true},
    raza: {type: String, required: true},
    sexo: {type: String, required: true},
    color_ojos: {type: String, required: true},
    tipo_pelaje: {type: String, required: true},
    situacion: {type: String, required: true},
    ultima_vac: {type: Date, required: true},
    desparasitado: {type: String, required: true},
    descripcion: {type: String, required: true},
    esquema_vac: {type: Array, required: true}
});

schema_gato.plugin(uniqueValidator);

export default mongoose.model<Gato>('Gato', schema_gato);