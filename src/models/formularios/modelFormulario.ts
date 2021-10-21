import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
//import InfoFamiliar from "./modelInformacionFamilia";
//import InfoRelacionada from "./modelInformacionRelacionada";
//import Referencia from "./modelReferenciaAdoptante";

interface Formulario extends Document{

  //Adoptante
  adoptanteFormulario: mongoose.Types.ObjectId; //Falta completar

  informacionFamiliar : mongoose.Types.ObjectId; //Ready
  informacionRelacionada: mongoose.Types.ObjectId; //Ready
  referencia: mongoose.Types.ObjectId;
  //Animal
  animal: mongoose.Types.ObjectId;
  

}

const schema_formulario: Schema = new Schema({
  informacionFamiliar: {type: mongoose.Types.ObjectId , ref: "InfoFamiliar"},     
  informacionRelacionada: {type: mongoose.Types.ObjectId, ref: "InfoRelcionada"},
  referencia: {type: mongoose.Types.ObjectId, ref: "Referencia"}, 
 
  animal: {type : mongoose.Types.ObjectId, ref: "Animal"},
  adoptanteFormulario: {type : mongoose.Types.ObjectId, ref: "Adoptante"}
});


export default mongoose.model<Formulario>("Formulario", schema_formulario);