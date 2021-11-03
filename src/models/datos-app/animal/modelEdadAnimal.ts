import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Edad extends Document {
  edad: string;
}

const schema_edad: Schema = new Schema({
  edad: { type: String, require: true, unique: true },
});

schema_edad.plugin(uniqueValidator);

export default mongoose.model<Edad>("Edad", schema_edad);
