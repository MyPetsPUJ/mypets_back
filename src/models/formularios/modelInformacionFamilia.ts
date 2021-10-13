import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface InfoFamiliar extends Document{

  //Informacion familiar
  numPersonasCasa: number;
  numAdultos: number;
  numNiños: number;
  edadesAdultos: number;
  edadesNiños : number;
  numMascotas : number;
  razasMascotas : string;
  temperamentoMascotas : string;
  tiempoConMascotas : string;
  nombreFamiliarContacto : string;
  numeroFamiliarContacto : number;
  familiaresDeAcuerdo : string;
  familiaresAlergias : string;
  familiaresPlaneaEmbarazo : string;

}

const schema_familiar: Schema = new Schema({
  numPersonasCasa: {type: Number, required: true},
  numAdultos: {type: Number, required: true},
  numNiños: {type: Number, required: true},
  edadesAdultos: {type: Number, required: true},
  edadesNiños : {type: Number, required: true},
  numMascotas : {type: Number, required: true},
  razasMascotas : {type: String, required: true},
  temperamentoMascotas : {type: String, required: true},
  tiempoConMascotas : {type: String, required: true},
  nombreFamiliarContacto : {type: String, required: true},
  numeroFamiliarContacto : {type: Number, required: true},
  familiaresDeAcuerdo : {type: String, required: true},
  familiaresAlergias : {type: String, required: true},
  familiaresPlaneaEmbarazo : {type: String, required: true}

});

export default mongoose.model<InfoFamiliar>("InfoFamiliar", schema_familiar);
