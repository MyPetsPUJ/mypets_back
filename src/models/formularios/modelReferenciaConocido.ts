import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface ReferenciaC extends Document{
  nombresFamiliar: string;
  apellidosFamiliar: string;
  numFijoFamiliar: string;
  numCelularFamiliar: string;
  tiempoDeConocimiento: string;
}

const schema_referencia: Schema = new Schema({
  nombresFamiliar: {type: String, required: true},
  apellidosFamiliar: {type: String, required: true},
  numFijoFamiliar: {type: String, required: true},
  numCelularFamiliar: {type: String, required: true},
  tiempoDeConocimiento: {type: String, required: true},
})

export default mongoose.model<ReferenciaC>("ReferenciaC", schema_referencia);