import mongoose, { Schema, Document } from "mongoose";

interface SolicitudAdopcion extends Document {
  idAnimal: string;
  idFundacion: string;
  idAdoptante: string;
  estado: Boolean;
  fecha_solicitud: string;
}

const schema_solicitudAdopcion: Schema = new Schema({});

export default mongoose.model<SolicitudAdopcion>(
  "SolicitudAdopcion",
  schema_solicitudAdopcion
);
