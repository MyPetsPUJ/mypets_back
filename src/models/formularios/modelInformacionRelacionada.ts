import mongoose, { Schema, Document, Mongoose } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";


interface InfoRelacionada extends Document{
//Informacion relacionada
  tiempoEnCasaHoras: number; 
  horaRegresoCasa: string;
  //lugarDeVivienda: string;
  lugarViviendaDeMascota: string;
  patioInteriorJugar: string;
  //garajeJugar: string;
  //zonasVerdesCercanas: string;
  //parquesZonaDomicilio: string;
  veterinarioGastos: string;
  //vacunasGastos: number;
  //alimentoGastos: number;
  //accesoriosGastos: number;
  //camaGastos: number;
  //correaGastos: number;
  //placaIdentificacionGastos: number;
  //dineroEstimadoMascota: number;
  mascotaAnterior: string;
  //especie: string;
  //raza: string;
  //tiempoMascotaAnterior: string;
  //razonMascotaAnterior: string;
  conoceCuidadosMascota: string;
  veterinarioDeConfianza: string;
  conscienteResponsabilidad15anos: string;
  actividadesConMascota: string;
  alternativaPaseador: string;
  espacioViviendaMascota: string;
  razonesAdopcion: string;
  disposicionMudarseConElAnimal: string;
  disposicionPasearAlAnimalPerro: string;
  disposicionAdaptacionAnimal: string;
  //tiempoAdaptacionAnimal: string; 
  asumirGastosAnimal: string;
  adoptanteAlternativoAusencia: string;
  permisionTenenciaAnimales: string;
  //lugarDormitorioAnimal: string;
}

const schema_relacionada: Schema = new Schema({
  tiempoEnCasaHoras: {type: Number, required: true}, 
  horaRegresoCasa: {type: String, required: true},
  //lugarDeVivienda: {type: String, required: true},
  lugarViviendaDeMascota: {type: String, required: true},
  patioInteriorJugar: {type: String, required: true},
  //garajeJugar: {type: String, required: true},
  //zonasVerdesCercanas: {type: String, required: true},
  //parquesZonaDomicilio: {type: String, required: true},
  veterinarioGastos: {type: String, required: true},
  //vacunasGastos: {type: Number, required: true},
  //alimentoGastos: {type: Number, required: true},
  //accesoriosGastos: {type: Number, required: true},
  //camaGastos: {type: Number, required: true},
  //correaGastos: {type: Number, required: true},
  //placaIdentificacionGastos: {type: Number, required: true},
  //dineroEstimadoMascota: {type: Number, required: true},
  mascotaAnterior: {type: String, required: true},
  //especie: {type: String, required: true},
  //raza: {type: String, required: true},
  //tiempoMascotaAnterior: {type: String, required: true},
  //razonMascotaAnterior: {type: String, required: true},
  conoceCuidadosMascota: {type: String, required: true},
  veterinarioDeConfianza: {type: String, required: true},
  conscienteResponsabilidad15anos: {type: String, required: true},
  actividadesConMascota: {type: String, required: true},
  alternativaPaseador: {type: String, required: true},
  espacioViviendaMascota: {type: String, required: true},
  razonesAdopcion: {type: String, required: true},
  disposicionMudarseConElAnimal: {type: String, required: true},
  disposicionPasearAlAnimalPerro: {type: String, required: true},
  disposicionAdaptacionAnimal: {type: String, required: true},
  //tiempoAdaptacionAnimal: {type: String, required: true}, 
  asumirGastosAnimal: {type: String, required: true},
  adoptanteAlternativoAusencia: {type: String, required: true},
  permisionTenenciaAnimales: {type: String, required: true},
  //lugarDormitorioAnimal: {type: String, required: true}
});

export default mongoose.model<InfoRelacionada>("InfoRelacionada", schema_relacionada);
