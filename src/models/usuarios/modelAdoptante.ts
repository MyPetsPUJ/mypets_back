import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcryptjs";

export enum UserType {
  ADOPTANTE = "Adoptante",
  FUNDACION = "Fundacion",
}

interface User extends Document {
  nombre: string;
  apellidos: string;
  fecha_nacimiento: string;
  tipo_doc: string;
  num_doc: string;
  genero: string;
  localidad: string;
  correo: string;
  num_celular: string;
  password: string;
  tipo_usuario: string;
  urlImg: string;
  animalesAdoptados: [{ type: mongoose.Types.ObjectId; ref: "Animal" }];
  solicitudesAdoptante: [
    { type: mongoose.Types.ObjectId; ref: "SolicitudAdopcion" }
  ];
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const schema_adoptante: Schema<User> = new Schema<User>({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  fecha_nacimiento: { type: Date, required: true },
  tipo_doc: { type: String, required: true },
  num_doc: { type: String, required: true },
  genero: { type: String, required: true },
  localidad: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  num_celular: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  urlImg: { type: String },
  tipo_usuario: { type: String },
  animalesAdoptados: [{ type: mongoose.Types.ObjectId, ref: "Animal" }],
  solicitudesAdoptante: [
    { type: mongoose.Types.ObjectId, ref: "SolicitudAdopcion" },
  ],
});

//schema_adoptante.plugin(uniqueValidator);

schema_adoptante.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

schema_adoptante.methods.validatePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model<User>("Adoptante", schema_adoptante);
