import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Tamano extends Document {
  tamano: string;
}

const schema_tamano: Schema = new Schema({
  tamano: { type: String, require: true, unique: true },
});

schema_tamano.plugin(uniqueValidator);

export default mongoose.model<Tamano>("Tamano", schema_tamano);
