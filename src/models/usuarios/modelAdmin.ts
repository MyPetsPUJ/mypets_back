import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import bcrypt from "bcryptjs";

interface Admin extends Document {
  nombres: string;
  apellidos: string;
  correo: string;
  password: string;
  tipo_usuario: string;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const schema_admin: Schema<Admin> = new Schema<Admin>({
  nombres: { type: String, require: true },
  apellidos: { type: String, require: true },
  correo: {
    type: String,
    require: true,
    unique: [true, "Error, ya existe un admin con este correo"],
  },
  password: { type: String, require: true },
  tipo_usuario: { type: String },
  
});

schema_admin.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

schema_admin.methods.validatePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model<Admin>("Admin", schema_admin);
