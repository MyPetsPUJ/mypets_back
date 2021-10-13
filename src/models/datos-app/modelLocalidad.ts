import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Localidad extends Document {
  nombre: string;
}

const schema_localidad: Schema = new Schema({
  nombre: { type: String, require: true, unique: true },
});

schema_localidad.plugin(uniqueValidator);

export default mongoose.model<Localidad>("Localidad", schema_localidad);
