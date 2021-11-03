import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface GeneroAnimal extends Document {
  genero: string;
}

const schema_genero_animal: Schema = new Schema({
  genero: { type: String, require: true, unique: true },
});

schema_genero_animal.plugin(uniqueValidator);

export default mongoose.model<GeneroAnimal>(
  "GeneroAnimal",
  schema_genero_animal
);
