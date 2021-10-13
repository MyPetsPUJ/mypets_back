import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface TipoDoc extends Document {
  nombre: string;
}

const schema_tipoDoc: Schema = new Schema({
  nombre: { type: String, require: true, unique: true },
});

schema_tipoDoc.plugin(uniqueValidator);

export default mongoose.model<TipoDoc>("TipoDoc", schema_tipoDoc);