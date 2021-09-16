import mongoose, { Schema, Document } from "mongoose";

interface SolicitudAdopcion extends Document {

    idAnimal: String;
    idFundacion: String;
    idAdoptante: String;
    estado: Boolean;
    fecha_solicitud: String;

}

const schema_solicitudAdopcion: Schema = new Schema({
    
});


export default mongoose.model<SolicitudAdopcion>('SolicitudAdopcion', schema_solicitudAdopcion);

