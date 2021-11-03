import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Desparasitado extends Document {
  estado: string;
}

const schema_desparasitado: Schema = new Schema({
  estado: { type: String, require: true, unique: true },
});

schema_desparasitado.plugin(uniqueValidator);

export default mongoose.model<Desparasitado>("Desparasitado", schema_desparasitado);