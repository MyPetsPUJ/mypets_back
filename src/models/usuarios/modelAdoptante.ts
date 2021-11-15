import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcryptjs";

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
  nombre: { type: String, required: [true, "Por favor ingrese un nombre"] },
  apellidos: {
    type: String,
    required: [true, "Por favor ingrese sus apellidos"],
  },
  fecha_nacimiento: {
    type: Date,
    required: [true, "Por favor ingrese una fecha de nacimiento"],
  },
  tipo_doc: {
    type: String,
    required: [true, "Por favor seleccione un tipo de documento"],
  },
  num_doc: {
    type: String,
    required: [true, "Por favor ingrese un número de documento"],
  },
  genero: { type: String, required: [true, "Por favor seleccione un género"] },
  localidad: {
    type: String,
    required: [true, "Por favor seleccione una localidad"],
  },
  correo: {
    type: String,
    required: true,
    unique: [true, "Error, ya existe un admin con este correo"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Por favor ingrese un correo válido",
    ],
  },
  num_celular: {
    type: String,
    required: [true, "Por favor ingrese un número de celular"],
    unique: true,
    match: [
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "Por favor ingrese un número de celular válido",
    ],
  },
  password: {
    type: String,
    required: [true, "Por favor ingrese una contraseña"],
  },
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
