import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcryptjs";

interface Fundacion extends Document {
  nombreFund: string;
  nombreEncar: string;
  apellidosEncar: string;
  tipo_doc: string;
  num_doc: string;
  fecha_creacion: Date;
  localidad: string;
  correo: string;
  num_celular: string;
  password: string;
  tipo_usuario: string;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const schema_fundacion: Schema<Fundacion> = new Schema<Fundacion>({
  nombreFund: { type: String, required: true },
  nombreEncar: { type: String, required: true },
  apellidosEncar: { type: String, required: true },
  tipo_doc: { type: String, required: true },
  num_doc: { type: String, required: true },
  fecha_creacion: { type: Date, required: true },
  localidad: { type: String, required: true },
  correo: { type: String, required: true },
  num_celular: { type: String, required: true },
  password: { type: String, required: true },
  tipo_usuario: { type: String },
});

//schema_fundacion.plugin(uniqueValidator);

schema_fundacion.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

schema_fundacion.methods.validatePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model<Fundacion>("Fundacion", schema_fundacion);
