import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface ReferenciaC extends Document {
  nombresFamiliar: string;
  apellidosFamiliar: string;
  numFijoFamiliar: string;
  numCelularFamiliar: string;
  tiempoDeConocimiento: string;
}

const schema_referencia: Schema = new Schema({
  nombresFamiliar: {
    type: String,
    required: [true, "Por favor ingrese los nombres de un conocido"],
  },
  apellidosFamiliar: {
    type: String,
    required: [true, "Por favor ingrese los apellidos de un conocido"],
  },
  numFijoFamiliar: { type: String, required: true },
  numCelularFamiliar: {
    type: String,
    required: [true, "Por favor ingrese un número de celular"],
    unique: true,
    match: [
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "Por favor ingrese un número de celular válido",
    ],
  },
  tiempoDeConocimiento: { type: String, required: true },
});

export default mongoose.model<ReferenciaC>("ReferenciaC", schema_referencia);
