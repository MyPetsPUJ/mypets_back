import mongoose, { Schema, Document, Model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface iProducto extends Document {
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

export const Producto: Model<iProducto> = mongoose.model("Producto", schema_producto);
