import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from "bcryptjs";
import geocoder from "../../lib/geocoder";

interface Fundacion extends Document {
  nombreFund: string;
  nombreEncar: string;
  apellidosEncar: string;
  tipo_doc: string;
  num_doc: string;
  fecha_creacion: string;
  // localidad: string;
  correo: string;
  num_celular: string;
  password: string;
  urlImg: string;
  tipo_usuario: string;
  publicaciones: [{ type: mongoose.Types.ObjectId; ref: "Publicacion" }];
  animales: [{ type: mongoose.Types.ObjectId; ref: "Animal" }];
  direccion: string | undefined;
  mision: string;
  vision: string;
  ubicacion: any;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const schema_fundacion: Schema<Fundacion> = new Schema<Fundacion>({
  nombreFund: { type: String, required: true },
  nombreEncar: { type: String, required: true },
  apellidosEncar: { type: String, required: true },
  tipo_doc: { type: String, required: true },
  num_doc: { type: String, required: true },
  fecha_creacion: { type: String, required: true },
  // localidad: { type: String, required: true },
  correo: { type: String, required: true },
  num_celular: { type: String, required: true },
  password: { type: String, required: true },
  urlImg: { type: String },
  tipo_usuario: { type: String },
  publicaciones: [{ type: mongoose.Types.ObjectId, ref: "Publicacion" }],
  animales: [{ type: mongoose.Types.ObjectId, ref: "Animal" }],
  direccion: { type: String, require: true },
  mision: { type: String, require: true },
  vision: { type: String, require: true },
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
