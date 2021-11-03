import { Request, Response, NextFunction } from "express";
import Formulario from "../models/formularios/modelFormulario";
import InfoFamiliar from "../models/formularios/modelInformacionFamilia";
import InfoRelacionada from "../models/formularios/modelInformacionRelacionada";
import ReferenciaF from "../models/formularios/modelReferenciaFamiliar";
import ReferenciaC from "../models/formularios/modelReferenciaConocido";
import SolicitudAdopcion from "../models/solicitud-adopcion/modelSolicitudAdopcion";


class ControllerFormulario{
  public async crearFormulario( req: Request, res: Response, next: NextFunction)
  {
    console.log("Creando formulario");

    const informFamiliar = new InfoFamiliar({
      numAdultos: req.body.informacionFamiliar.numAdultos,
      numNinos: req.body.informacionFamiliar.numNinos,
      edadesAdultos: req.body.informacionFamiliar.edadesAdultos,
      edadesNinos : req.body.informacionFamiliar.edadesNinos,
      numMascotas : req.body.informacionFamiliar.numMascotas,
      razasMascotas : req.body.informacionFamiliar.razasMascotas,
      temperamentoMascotas : req.body.informacionFamiliar.temperamentoMascotas,
      tiempoConMascotas : req.body.informacionFamiliar.tiempoConMascotas,
      nombreFamiliarContacto : req.body.informacionFamiliar.nombreFamiliarContacto,
      numeroFamiliarContacto : req.body.informacionFamiliar.numeroFamiliarContacto,
      familiaresDeAcuerdo : req.body.informacionFamiliar.familiaresDeAcuerdo,
      familiaresAlergias : req.body.informacionFamiliar.familiaresAlergias,
      familiaresPlaneaEmbarazo : req.body.informacionFamiliar.familiaresPlaneaEmbarazo
    });
    const informRelacionada = new InfoRelacionada({
      tiempoEnCasaHoras: req.body.informacionRelacionada.tiempoEnCasaHoras, 
      horaRegresoCasa: req.body.informacionRelacionada.horaRegresoCasa,
      lugarViviendaDeMascota: req.body.informacionRelacionada.lugarViviendaDeMascota,
      patioInteriorJugar: req.body.informacionRelacionada.patioInteriorJugar,
      veterinarioGastos: req.body.informacionRelacionada.veterinarioGastos,
      mascotaAnterior: req.body.informacionRelacionada.mascotaAnterior,
      conoceCuidadosMascota: req.body.informacionRelacionada.conoceCuidadosMascota,
      veterinarioDeConfianza: req.body.informacionRelacionada.veterinarioDeConfianza,
      conscienteResponsabilidad15anos: req.body.informacionRelacionada.conscienteResponsabilidad15anos,
      actividadesConMascota: req.body.informacionRelacionada.actividadesConMascota,
      alternativaPaseador: req.body.informacionRelacionada.alternativaPaseador,
      espacioViviendaMascota: req.body.informacionRelacionada.espacioViviendaMascota,
      razonesAdopcion: req.body.informacionRelacionada.razonesAdopcion,
      disposicionMudarseConElAnimal: req.body.informacionRelacionada.disposicionMudarseConElAnimal,
      disposicionPasearAlAnimalPerro: req.body.informacionRelacionada.disposicionPasearAlAnimalPerro,
      disposicionAdaptacionAnimal: req.body.informacionRelacionada.disposicionAdaptacionAnimal,
      asumirGastosAnimal: req.body.informacionRelacionada.asumirGastosAnimal,
      adoptanteAlternativoAusencia: req.body.informacionRelacionada.adoptanteAlternativoAusencia,
      permisionTenenciaAnimales: req.body.informacionRelacionada.permisionTenenciaAnimales
    });
    const referenciaFamiliar = new ReferenciaF({
      nombresFamiliar: req.body.referenciaFamiliar.nombres,
      apellidosFamiliar: req.body.referenciaFamiliar.apellidos,
      numFijoFamiliar: req.body.referenciaFamiliar.numFijo,
      numCelularFamiliar: req.body.referenciaFamiliar.numCelular,
      parentezcoFamiliar: req.body.referenciaFamiliar.parentezco
    });
    const referenciaConocido= new ReferenciaC({
      nombresFamiliar: req.body.referenciaPersonal.nombres,
      apellidosFamiliar: req.body.referenciaPersonal.apellidos,
      numFijoFamiliar: req.body.referenciaPersonal.numFijo,
      numCelularFamiliar: req.body.referenciaPersonal.numCelular,
      tiempoDeConocimiento: req.body.referenciaPersonal.tiempoDeConocimiento
    });
    const formulario = new Formulario({
      informacionFamiliar : informFamiliar._id,
      informacionRelacionada: informRelacionada._id,
      referenciaFamiliar: referenciaFamiliar._id,
      referenciaConocido: referenciaConocido._id
    });
      console.log("formulario")
      console.log(formulario);
      console.log("Informacion Familiar");
      console.log(informFamiliar);
      console.log("Informacion Relacionada");
      console.log(informRelacionada);
      console.log("Referencia1");
      console.log(referenciaFamiliar);
      console.log("Referencia2");
      console.log(referenciaConocido);

      informFamiliar.save();

      informRelacionada.save();

      referenciaFamiliar.save();

      referenciaConocido.save();
      //--------------------------------------------------
      const idSolicitud = req.body.idSolicitud;
      const solicitud = await SolicitudAdopcion.findByIdAndUpdate(
        idSolicitud,
        { $set :{ idFormulario: formulario._id } },
        { new: true, useFindAndModify: false }
      );
      //--------------------------------------------------
      formulario.save()
        .then((result: any) => {
          res.status(200).json({
            message: "Formulario Creado",
            result: result,
          });
        })
        .catch((err: any) => {
          res.status(500).json({
            error: err,
          });
        });
    }
  
  public async getFamiliares( req: Request, res: Response, next: NextFunction): Promise<Response> {
    const informFamiliar = await InfoFamiliar.find();
    return res.json(informFamiliar);
  }

  public async getInfoRelacionada( req: Request, res: Response, next: NextFunction): Promise<Response> {
    const informRelacionada = await InfoRelacionada.find();
    return res.json(informRelacionada);
  }

  public async getReferenciaFamilia( req: Request, res: Response, next: NextFunction): Promise<Response> {
    const referenciaFami = await ReferenciaF.find();
    return res.json(referenciaFami);
  }

  public async getReferenciaConocido( req: Request, res: Response, next: NextFunction): Promise<Response> {
    const referenciaConoc = await ReferenciaC.find();
    return res.json(referenciaConoc);
  }

  public async getFormularios( req: Request, res: Response, next: NextFunction): Promise<Response> {
    const formularios = await Formulario.find();
    return res.json(formularios);
  }

  public async getFormulario(req: Request, res: Response, next: NextFunction): Promise<Response>{
    const id = req.params.id;
    const formulario = await Formulario.findById(id);
    return res.json(formulario);
  }

  public async getDatosFormulario(req: Request, res: Response, next: NextFunction): Promise<Response>{
    const id = req.params.id;
    const solicitud = await SolicitudAdopcion.findById(id);
    
    const formularioFami = await Formulario.findById(solicitud?.idFormulario).populate("informacionFamiliar");
    const formularioRela = await Formulario.findById(solicitud?.idFormulario).populate("informacionRelacionada");
    const formularioReF = await Formulario.findById(solicitud?.idFormulario).populate("referenciaFamiliar");
    const formularioReC = await Formulario.findById(solicitud?.idFormulario).populate("referenciaConocido");

    return res.json({formularioFami,formularioRela,formularioReF,formularioReC});
  }


  public async deleteFormulario( req: Request, res: Response, next: NextFunction): Promise<Response> {
    const id = req.params.id;
    await Formulario.findByIdAndRemove(id);
     
    return res.json({
      message: "Eleminido exitosamente"
    });
  }

  }
  
  export const controllerFormulario = new ControllerFormulario();