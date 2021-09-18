import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Vacuna extends Document {
  nombre: string;
}

const schema_vacuna: Schema = new Schema({
  nombre: { type: String, require: true, unique: true },
});

schema_vacuna.plugin(uniqueValidator);

export default mongoose.model<Vacuna>("Vacuna", schema_vacuna);
