import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface InfoFamiliar extends Document{

  //Informacion familiar
  numAdultos: number;
  numNinos: number;
  edadesAdultos: number;
  edadesNinos : number;
  numMascotas : number;
  razasMascotas : string;
  temperamentoMascotas : string;
  tiempoConMascotas : number;
  nombreFamiliarContacto : string;
  numeroFamiliarContacto : number;
  familiaresDeAcuerdo : string;
  familiaresAlergias : string;
  familiaresPlaneaEmbarazo : string;
}

const schema_familiar: Schema = new Schema({
  numAdultos: {type: Number, required: true},
  numNinos: {type: Number, required: true},
  edadesAdultos: {type: Number, required: true},
  edadesNinos : {type: Number, required: true},
  numMascotas : {type: Number, required: true},
  razasMascotas : {type: String, required: true},
  temperamentoMascotas : {type: String, required: true},
  tiempoConMascotas : {type: Number, required: true},
  nombreFamiliarContacto : {type: String, required: true},
  numeroFamiliarContacto : {type: Number, required: true},
  familiaresDeAcuerdo : {type: String, required: true},
  familiaresAlergias : {type: String, required: true},
  familiaresPlaneaEmbarazo : {type: String, required: true}
});

export default mongoose.model<InfoFamiliar>("InfoFamiliar", schema_familiar);
