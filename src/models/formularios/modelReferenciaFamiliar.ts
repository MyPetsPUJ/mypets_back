import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface ReferenciaF extends Document {
  nombresFamiliar: string;
  apellidosFamiliar: string;
  numFijoFamiliar: string;
  numCelularFamiliar: string;
  parentezcoFamiliar: string;
}

const schema_referencia: Schema = new Schema({
  nombresFamiliar: {
    type: String,
    required: [true, "Por favor ingrese los nombres de un familiar"],
  },
  apellidosFamiliar: {
    type: String,
    required: [true, "Por favor ingrese los apellidos de su familiar"],
  },
  numFijoFamiliar: {
    type: String,
    required: [true, "Por favor ingrese el número fijo de un familiar"],
  },
  numCelularFamiliar: {
    type: String,
    required: [true, "Por favor ingrese el número celular"],
    unique: true,
    match: [
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "Por favor ingrese un número de celular válido",
    ],
  },
  parentezcoFamiliar: {
    type: String,
    required: [true, "Por favor ingrese el parentezco con su familiar"],
  },
});

export default mongoose.model<ReferenciaF>("ReferenciaF", schema_referencia);
