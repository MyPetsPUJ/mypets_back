import mongoose, { Schema, Document } from "mongoose";

interface Publicacion extends Document {
  titulo: string;
  cuerpo: string;
  fecha: string;
  urlImg: string;
  seccion: string;
  autorPublicacion: mongoose.Types.ObjectId;
}

const schema_publicacion: Schema = new Schema({
  titulo: { type: String, required: [true, "Debe ingresar un título."] },
  cuerpo: {
    type: String,
    required: [true, "Debe ingresar un cuerpo para la publicación"],
  },
  fecha: { type: String, required: [true, "Ingrese una fecha"] },
  urlImg: { type: String, required: [true, "Por favor ingrese una imagen"] },
  seccion: {
    type: String,
    required: [true, "Seleccione la sección acorde a la publicación"],
  },
  autorPublicacion: { type: mongoose.Types.ObjectId, ref: "Fundacion" },
});

export default mongoose.model<Publicacion>("Publicacion", schema_publicacion);
