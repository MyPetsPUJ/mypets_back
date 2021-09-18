import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface VacunaPerro extends Document {
  nombre: string;
}

const schema_vacuna_perro: Schema = new Schema({
  nombre: { type: String, require: true, unique: true },
});

schema_vacuna_perro.plugin(uniqueValidator);

export default mongoose.model<VacunaPerro>("VacunaPerro", schema_vacuna_perro);
