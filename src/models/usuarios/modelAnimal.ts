import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Animal extends Document {
  nombre: string;
  edad: string;
  raza: string;
  sexo: string;
  tamano: string;
  color_ojos: string;
  tipo_pelaje: string;
  situacion: string;
  desparasitado: string;
  ultima_vac: string;
  descripcion: string;
  urlImg: string;
  esquema_vac: string;
  tipo_animal: string;
  ownerFundacion: mongoose.Types.ObjectId;
  ownerAdoptante: mongoose.Types.ObjectId;
  enAdopcion: boolean;
  adoptado: boolean;
}

const schema_animal: Schema = new Schema({
  nombre: {
    type: String,
    required: [true, "Por favor ingrese un nombre para el animal"],
  },
  edad: {
    type: String,
    required: [true, "Por favor seleccione una edad para el animal"],
  },
  raza: {
    type: String,
    required: [true, "Por favor ingrese la raza del animal"],
  },
  sexo: {
    type: String,
    required: [true, "Por favor ingrese si es macho o hembra"],
    enum: ["Macho, Hembra"],
  },
  tamano: {
    type: String,
    required: [true, "Por favor ingrese el tamaño del animal"],
  },
  color_ojos: {
    type: String,
    required: [true, "Por favor seleccione el color de ojos del animal"],
  },
  tipo_pelaje: {
    type: String,
    required: [true, "Por favor seleccione el tipo de pelaje del animal"],
  },
  situacion: {
    type: String,
    required: [true, "Por favor ingrese si está esterilizado o no el animal"],
  },
  desparasitado: {
    type: String,
    required: [true, "Por favor ingrese si está o no desparasitado el animal"],
  },
  ultima_vac: { type: String },
  descripcion: {
    type: String,
    required: [true, "Por favor ingrese una descripción para el animal"],
  },
  urlImg: {
    type: String,
    required: [true, "Por favor ingrese una imagen del animal"],
  },
  esquema_vac: { type: String },
  tipo_animal: { type: String, required: true },
  ownerFundacion: { type: mongoose.Types.ObjectId, ref: "Fundacion" },
  ownerAdoptante: { type: mongoose.Types.ObjectId, ref: "Adoptante" },
  enAdopcion: { type: Boolean, required: true },
  adoptado: { type: Boolean, required: true },
});

schema_animal.plugin(uniqueValidator);

export default mongoose.model<Animal>("Animal", schema_animal);
