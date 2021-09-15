import mongoose, { Schema, Document } from "mongoose";

interface Publicacion extends Document{

    titulo: String;
    cuerpo: String;
    fecha: String;
    // urlImg: String;
    seccion: String;

}

const schema_publicacion: Schema = new Schema({

    titulo: {type: String, required: true},
    cuerpo: {type: String, required: true},
    fecha: {type: String, required: true},
    // urlImg: {type: String, required: true},
    seccion: {type: String, required: true},

});



export default mongoose.model<Publicacion>('Publicacion', schema_publicacion);