import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Genero extends Document {
  nombre: string;
}

const schema_genero: Schema = new Schema({
  nombre: { type: String, require: true, unique: true },
});

schema_genero.plugin(uniqueValidator);

export default mongoose.model<Genero>("Genero", schema_genero);
