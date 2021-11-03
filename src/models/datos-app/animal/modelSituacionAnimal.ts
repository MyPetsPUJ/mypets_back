import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface SituacionAnimal extends Document {
  situacion: string;
}

const schema_situacion: Schema = new Schema({
  situacion: { type: String, require: true, unique: true },
});

schema_situacion.plugin(uniqueValidator);

export default mongoose.model<SituacionAnimal>("SituacionAnimal", schema_situacion);