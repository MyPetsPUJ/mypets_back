import mongoose, {Schema, Document} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

interface Fundacion extends Document{
    nombreFund: string;
    nombreEncar: string;
    apellidosEncar: string;
    tipo_doc: string;
    num_doc: string;
    fecha_creacion: Date;
    localidad: string;
    correo: string;
    num_celular: string;
    password: string;
    tipo_usuario: string;
}

const schema_fundacion: Schema = new Schema({
    nombreFund: {type: String, required: true},
    nombreEncar: {type: String, required: true},
    apellidosEncar: {type: String, required: true},
    tipo_doc: {type: String, required: true},
    num_doc: {type: String, required: true},
    fecha_creacion: {type: Date, required: true},
    localidad: {type: String, required: true},
    correo: {type: String, required: true},
    num_celular: {type: String, required: true},
    password: {type: String, required: true},
    tipo_usuario: {type: String}
});

schema_fundacion.plugin(uniqueValidator);

export default mongoose.model<Fundacion>('Fundacion', schema_fundacion);