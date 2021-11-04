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
  nombre: { type: String, required: true },
  edad: { type: String, required: true },
  raza: { type: String, required: true },
  sexo: { type: String, required: true },
  tamano: { type: String, required: true },
  color_ojos: { type: String, required: true },
  tipo_pelaje: { type: String, required: true },
  situacion: { type: String, required: true },
  desparasitado: { type: String, required: true },
  ultima_vac: { type: String, required: true },
  descripcion: { type: String, required: true },
  urlImg: { type: String },
  esquema_vac: { type: String, required: true },
  tipo_animal: { type: String, required: true },
  ownerFundacion: { type: mongoose.Types.ObjectId, ref: "Fundacion" },
  ownerAdoptante: { type: mongoose.Types.ObjectId, ref: "Adoptante" },
  enAdopcion: { type: Boolean, required: true },
  adoptado: { type: Boolean, required: true },
});

schema_animal.plugin(uniqueValidator);

export default mongoose.model<Animal>("Animal", schema_animal);
