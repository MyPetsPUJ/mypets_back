import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcryptjs";
import geocoder from "../../lib/geocoder";

interface Fundacion extends Document {
  nombreFund: string;
  nombreEncar: string;
  apellidosEncar: string;
  tipo_doc: string;
  num_doc: number;
  fecha_creacion: string;
  correo: string;
  num_celular: string;
  password: string;
  urlImg: string;
  usuarioIG: string;
  tipo_usuario: string;
  publicaciones: [{ type: mongoose.Types.ObjectId; ref: "Publicacion" }];
  animales: [{ type: mongoose.Types.ObjectId; ref: "Animal" }];
  puntosDeInteres: [{ type: mongoose.Types.ObjectId; ref: "PuntoDeInteres" }];
  solicitudesFundacion: [
    { type: mongoose.Types.ObjectId; ref: "SolicitudAdopcion" }
  ];
  direccion: string | undefined;
  mision: string;
  vision: string;
  ubicacion: any;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const schema_fundacion: Schema<Fundacion> = new Schema<Fundacion>({
  nombreFund: {
    type: String,
    required: [true, "Por favor añada el nombre de fundación"],
  },
  nombreEncar: {
    type: String,
    required: [true, "Por favor añada el nombre del responsable"],
  },
  apellidosEncar: {
    type: String,
    required: [true, "Por favor añada los apellidos del responsable"],
  },
  tipo_doc: {
    type: String,
    required: [true, "Por favor seleccione un tipo de documento"],
  },
  num_doc: {
    type: Number,
    required: [true, "Por favor ingrese un número de documento"],
  },
  fecha_creacion: {
    type: String,
    required: [true, "Por favor ingrese una fecha de creación"],
  },
  correo: {
    type: String,
    required: [true, "Por favor seleccione un correo"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
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
  password: { type: String, required: true },
  urlImg: { type: String, required: true },
  usuarioIG: { type: String },
  tipo_usuario: { type: String },
  publicaciones: [{ type: mongoose.Types.ObjectId, ref: "Publicacion" }],
  animales: [{ type: mongoose.Types.ObjectId, ref: "Animal" }],
  puntosDeInteres: [{ type: mongoose.Types.ObjectId, ref: "PuntoDeInteres" }],
  solicitudesFundacion: [
    { type: mongoose.Types.ObjectId, ref: "SolicitudAdopcion" },
  ],
  direccion: { type: String, required: true },
  mision: { type: String, required: true },
  vision: { type: String, required: true },
  ubicacion: {
    type: {
      type: String,
      enum: ["Point"], // 'location.type' must be 'Point'
      //required: true,
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
      //required: true,
    },
    direccionFormateada: String,
  },
});

//schema_fundacion.plugin(uniqueValidator);

schema_fundacion.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.direccion!);
  console.log(loc);
  this.ubicacion = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    direccionFormateada: loc[0].formattedAddress,
  };

  this.direccion = undefined;
  next();
});

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
