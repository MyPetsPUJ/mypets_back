import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Referencia extends Document{

  nombresFamiiar: string;
  apellidosFamiliar: string;
  numFijoFamiliar: string;
  numCelularFamiliar: string;
  parentezcoFamiliar: string;
  tiempoDeConocimientoFamiliar: string;
}

const schema_referencia: Schema = new Schema({
  nombresFamiiar: {type: String, required: true},
  apellidosFamiliar: {type: String, required: true},
  numFijoFamiliar: {type: String, required: true},
  numCelularFamiliar: {type: String, required: true},
  parentezcoFamiliar: {type: String, required: true},
  tiempoDeConocimientoFamiliar: {type: String, required: true}
})

export default mongoose.model<Referencia>("Referencia", schema_referencia);