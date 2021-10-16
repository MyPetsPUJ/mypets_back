import mongoose, { Schema, Document } from "mongoose";

interface DatosAnimal extends Document {
  edad: Array<string>;
  tipo: Array<string>;
  genero: Array<string>;
  tamano: Array<string>;
  color_ojos: Array<string>;
  tipo_pelaje: Array<string>;
  desparasitado: Array<string>;
  situacion: Array<string>;
}

const schema_datos_animal: Schema = new Schema({
  edad: { type: [String], require: true },
  tipo: { type: [String], require: true },
  genero: { type: [String], require: true },
  tamano: { type: [String], require: true },
  color_ojos: { type: [String], require: true },
  tipo_pelaje: { type: [String], require: true },
  desparasitado: { type: [String], require: true },
  situacion: { type: [String], require: true },
});

export default mongoose.model<DatosAnimal>("DatosAnimal", schema_datos_animal);
