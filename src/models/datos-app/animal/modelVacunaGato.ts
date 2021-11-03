import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface VacunaGato extends Document {
  nombre: string;
}

const schema_vacuna_gato: Schema = new Schema({
  nombre: { type: String, require: true, unique: true },
});

schema_vacuna_gato.plugin(uniqueValidator);

export default mongoose.model<VacunaGato>("VacunaGato", schema_vacuna_gato);
