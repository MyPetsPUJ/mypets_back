import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Admin extends Document {
  nombres: string;
  apellidos: string;
  correo: string;
  password: string;
}

const schema_admin: Schema = new Schema({
  nombres: { type: String, require: true },
  apellidos: { type: String, require: true },
  correo: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

schema_admin.plugin(uniqueValidator);

export default mongoose.model<Admin>("Admin", schema_admin);
