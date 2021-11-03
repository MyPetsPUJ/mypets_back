import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface TipoAnimal extends Document {
  tipo: string;
}

const schema_tipo_animal: Schema = new Schema({
  tipo: { type: String, require: true, unique: true },
});

schema_tipo_animal.plugin(uniqueValidator);

export default mongoose.model<TipoAnimal>("TipoAnimal", schema_tipo_animal);
