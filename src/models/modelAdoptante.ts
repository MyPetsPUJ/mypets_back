import mongoose, {Schema, Document} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export enum UserType{
    ADOPTANTE = "Adoptante",
    FUNDACION = "Fundacion"  
}

interface User extends Document{
    nombre: string;
    apellidos: string;
    fecha_nacimiento: string;
    tipo_doc: string;
    num_doc: string;
    genero: string;
    localidad: string;
    correo: string;
    num_celular: string;
    password: string;
    tipo_usuario: string;
}

const schema_adoptante: Schema = new Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    fecha_nacimiento:{type: Date, required: true},
    tipo_doc: {type: String, required: true},
    num_doc: {type: String, required: true},
    genero: {type: String, required: true},
    localidad: {type: String, required: true},
    correo: {type: String, required: true, unique: true},
    num_celular: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    tipo_usuario: {type: String}
});

schema_adoptante.plugin(uniqueValidator);

export default mongoose.model<User>('Adoptante', schema_adoptante);