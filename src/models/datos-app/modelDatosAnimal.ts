import mongoose, { Schema, Document } from "mongoose";

interface DatosAnimal extends Document {
  edad: string;
  tipo: string;
  genero: string;
  tamano: string;
  color_ojos: string;
  tipo_pelaje: string;
  desparasitado: string;
  situacion: string;
}

const schema_datos_animal: Schema = new Schema({
  edad: { type: String, require: true },
  tipo: { type: String, require: true },
  genero: { type: String, require: true },
  tamano: { type: String, require: true },
  color_ojos: { type: String, require: true },
  tipo_pelaje: { type: String, require: true },
  desparasitado: { type: String, require: true },
  situacion: { type: String, require: true },
});

export default mongoose.model<DatosAnimal>("DatosAnimal", schema_datos_animal);
