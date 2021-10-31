import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Formulario extends Document{
  informacionFamiliar : mongoose.Types.ObjectId; 
  informacionRelacionada: mongoose.Types.ObjectId; 
  referenciaFamiliar: mongoose.Types.ObjectId;
  referenciaConocido: mongoose.Types.ObjectId;
}

const schema_formulario: Schema = new Schema({
  informacionFamiliar: {type: mongoose.Types.ObjectId , ref: "InfoFamiliar"},     
  informacionRelacionada: {type: mongoose.Types.ObjectId, ref: "InfoRelacionada"},
  referenciaFamiliar: {type: mongoose.Types.ObjectId, ref: "ReferenciaF"},
  referenciaConocido: {type: mongoose.Types.ObjectId, ref: "ReferenciaC"}, 

});

export default mongoose.model<Formulario>("Formulario", schema_formulario);