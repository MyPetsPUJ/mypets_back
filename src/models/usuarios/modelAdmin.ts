import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import bcrypt from "bcryptjs";

interface Admin extends Document {
  nombres: string;
  apellidos: string;
  correo: string;
  password: string;
  tipo_usuario: string;
  productos: [{ type: mongoose.Types.ObjectId; ref: "Producto" }];
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const schema_admin: Schema<Admin> = new Schema<Admin>({
  nombres: { type: String, required: [true, "Por favor ingrese un nombre"] },
  apellidos: {
    type: String,
    required: [true, "Por favor ingrese sus apellidos"],
  },
  correo: {
    type: String,
    required: true,
    unique: [true, "Error, ya existe un admin con este correo"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: { type: String, required: [true, "Ingrese una contraseña"] },
  tipo_usuario: { type: String },
  productos: [{ type: mongoose.Types.ObjectId, ref: "Producto" }],
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
