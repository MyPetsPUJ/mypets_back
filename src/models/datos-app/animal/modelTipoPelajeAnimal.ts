import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface TipoPelaje extends Document {
  tipoPelaje: string;
}

const schema_tipo_pelaje: Schema = new Schema({
  tipoPelaje: { type: String, require: true, unique: true },
});

schema_tipo_pelaje.plugin(uniqueValidator);

export default mongoose.model<TipoPelaje>("TipoPelaje", schema_tipo_pelaje);
