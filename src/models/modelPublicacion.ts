import mongoose, { Schema, Document } from "mongoose";

interface Publicacion extends Document{

    titulo: string;
    cuerpo: string;
    fecha: string;
    urlImg: string;
    seccion: string;
    autorPublicacion: Schema.Types.ObjectId;

}

const schema_publicacion: Schema = new Schema({

    titulo: {type: String, required: true},
    cuerpo: {type: String, required: true},
    fecha: {type: String, required: true},
    urlImg: {type: String, required: true},
    seccion: {type: String, required: true},
    autorPublicacion: {type: Schema.Types.ObjectId, ref: "Fundacion"}

});

export default mongoose.model<Publicacion>('Publicacion', schema_publicacion);