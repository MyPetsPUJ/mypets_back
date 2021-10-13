import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Seccion extends Document {
  nombre: string;
}

const schema_seccion: Schema = new Schema({
  nombre: { type: String, require: true, unique: true },
});

schema_seccion.plugin(uniqueValidator);

export default mongoose.model<Seccion>("Seccion", schema_seccion);