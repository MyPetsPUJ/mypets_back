import mongoose, { Schema, Document } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

interface Producto extends Document {
  nombre: string;
  tipoAnimal: string;
  urlImg: string;
  seccion: string;
  precio: string;
  idAdmin: mongoose.Types.ObjectId;
}

const schema_producto: Schema = new Schema({
  nombre: { type: String, require: true },
  tipoAnimal: { type: String, require: true },
  urlImg: { type: String, require: true },
  seccion: { type: String, require: true },
  precio: { type: String, require: true },
  idAdmin: { type: mongoose.Types.ObjectId, ref: "Admin" },
});

schema_producto.plugin(uniqueValidator);

export default mongoose.model<Producto>("Producto", schema_producto);
