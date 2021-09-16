import mongoose, { Schema, Document } from "mongoose";

interface PuntoDeInteres extends Document {
  latitud: number;
  longitud: number;
  descripcion: string;
}
