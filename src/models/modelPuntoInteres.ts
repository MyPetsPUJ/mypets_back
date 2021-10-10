import mongoose, { Schema, Document } from "mongoose";

import GeoJson from "mongoose-geojson-schema";

interface PuntoDeInteres extends Document {
  titulo: string;
  descripcion: string;
  direccion: string;
  autorPuntoDeInteres: mongoose.Types.ObjectId;
  ubicacion: mongoose.Schema.Types.Point;
}

const schema_punto_de_interes: Schema<PuntoDeInteres> =
  new Schema<PuntoDeInteres>({
    titulo: { type: String, require: true },
    descripcion: { type: String, require: true },
    direccion: { type: String },
    autorPuntoDeInteres: { type: mongoose.Types.ObjectId, ref: "Fundacion" },
    ubicacion: {
      type: {
        type: String,
        enum: ["Point"], // 'location.type' must be 'Point'
        //required: true,
      },
      coordinates: {
        type: [Number],
        //required: true,
      },
    },
  });

export default mongoose.model<PuntoDeInteres>(
  "PuntoDeInteres",
  schema_punto_de_interes
);
