import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Referencia extends Document{

  nombresFamiliar: string;
  apellidosFamiliar: string;
  numFijoFamiliar: string;
  numCelularFamiliar: string;
  parentezcoFamiliar: string;
}

const schema_referencia: Schema = new Schema({
  nombresFamiliar: {type: String, required: true},
  apellidosFamiliar: {type: String, required: true},
  numFijoFamiliar: {type: String, required: true},
  numCelularFamiliar: {type: String, required: true},
  parentezcoFamiliar: {type: String, required: true},
})

export default mongoose.model<Referencia>("Referencia", schema_referencia);