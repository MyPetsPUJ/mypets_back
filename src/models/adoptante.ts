import mongoose, {Schema, Document} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

interface User extends Document{
    nombre: string;
    apellidos: string;
    fecha_nacimiento: string;
    genero: string;
    localidad: string;
    correo: string;
    num_celular: string;
    password: string;
}

const schema_adoptante: Schema = new Schema({
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

export default mongoose.model<User>('Adoptante', schema_adoptante);