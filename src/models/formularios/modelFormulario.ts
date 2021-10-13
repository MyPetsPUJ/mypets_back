import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import InfoFamiliar from "./modelInformacionFamilia";
import InfoRelacionada from "./modelInformacionRelacionada";

interface Formulario extends Document{

  informacionFamiliar: typeof InfoFamiliar;
  informacionRelacionada: typeof InfoRelacionada;
  //Animal
  animal: mongoose.Types.ObjectId;
  //Adoptante
  adoptanteFormulario: mongoose.Types.ObjectId;

}

const schema_formulario: Schema = new Schema({
  informacionFamiliar: {type: InfoFamiliar, require: true},     //?????????????????????
  informacionRelacionada: {type: InfoRelacionada, require: true},  //???????????????????
  animal: {type : mongoose.Types.ObjectId, ref: "Animal"},
  adoptanteFormulario: {type : mongoose.Types.ObjectId, ref: "Adoptante"}
});


export default mongoose.model<Formulario>("Formulario", schema_formulario);