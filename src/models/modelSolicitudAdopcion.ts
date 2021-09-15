import mongoose, { Schema, Document } from "mongoose";

interface SolicitudAdopcion extends Document {

    idAnimal: String;
    idFundacion: String;
    idAdoptante: String;

}

