import mongoose, { Schema, Document } from "mongoose";

interface SolicitudAdopcion extends Document {
  idAnimal: mongoose.Types.ObjectId; 
  idFundacion: mongoose.Types.ObjectId;
  idAdoptante: mongoose.Types.ObjectId;
  idFormulario: mongoose.Types.ObjectId;
  estado: Boolean;
  fecha_solicitud: string;
}

const schema_solicitudAdopcion: Schema = new Schema({
  idAnimal: { type: mongoose.Types.ObjectId , ref : "Animal"},
  idFundacion: { type: mongoose.Types.ObjectId, ref: "Fundacion"},
  idAdoptante: { type: mongoose.Types.ObjectId, ref: "Adoptante"},
  idFormulario: { type: mongoose.Types.ObjectId, ref: "Formulario"},
  estado: {type : Boolean, required : true},
  fecha_solicitud: {type : String, required : true}

});

export default mongoose.model<SolicitudAdopcion>("SolicitudAdopcion", schema_solicitudAdopcion
);
