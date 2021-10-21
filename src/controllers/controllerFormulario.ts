import { Request, Response, NextFunction } from "express";
import Formulario from "../models/formularios/modelFormulario";
import InfoFamiliar from "../models/formularios/modelInformacionFamilia";
import InfoRelacionada from "../models/formularios/modelInformacionRelacionada";
import Referencia from "../models/formularios/modelReferenciaAdoptante";
//import Controller

class ControllerFormulario{
    public dentroDeFormulario(req: Request, res: Response, next: NextFunction) {
      //res.send([1, 1, 1]);
      console.log("Creando formulario");
      next();
    }
  
    public async crearFormulario( req: Request, res: Response, next: NextFunction)
    {
      console.log("Creando formulario");
      //console.log(req.body);
      //console.log(req.file);
      
      //res.send([9, 9, 9]);

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
      const referenciaFamiliar = new Referencia({
        nombresFamiliar: req.body.referenciaFamiliar.nombres,
        apellidosFamiliar: req.body.referenciaFamiliar.apellidos,
        numFijoFamiliar: req.body.referenciaFamiliar.numFijo,
        numCelularFamiliar: req.body.referenciaFamiliar.numCelular,
        parentezcoFamiliar: req.body.referenciaFamiliar.parentezco
      });
      const formulario = new Formulario({
        informacionFamiliar : informFamiliar._id,
        informacionRelacionada: informRelacionada._id,
        referencia: referenciaFamiliar._id
      });

      console.log(formulario);
      console.log("Informacion Familiar");
      console.log(informFamiliar);
      console.log("Informacion Relacionada");
      console.log(informRelacionada);
      console.log("Referencia");
      console.log(referenciaFamiliar);

      informFamiliar.save();
        /*.then((result: any) => {
          res.status(200).json({
            message: "Solicitud creada",
            result: result,
          });
        })
        .catch((err: any) => {
          res.status(500).json({
            error: err,
          });
        });
      */
      informRelacionada.save();
        /*.then((result: any) => {
          res.status(200).json({
            message: "Solicitud creada",
            result: result,
          });
        })
        .catch((err: any) => {
          res.status(500).json({
            error: err,
          });
        });*/
      referenciaFamiliar.save();
      /*  .then((result: any) => {
          res.json({
            message: "Solicitud creada2",
            result: result,
          });
        })
        .catch((err: any) => {
          res.status(500).json({
            error: err,
          });
        });*/
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
 
    /*formulario.save()
        .then((result: any) => {
          res.status(1).json({
            message: "Solicitud creada",
            result: result,
          });
        })
        .catch((err: any) => {
          res.status(500).json({
            error: err,
          });
        });
      }*/
    }

    public async getFamiliar( req: Request, res: Response, next: NextFunction): Promise<Response> {
      const informFamiliar = await InfoFamiliar.find();
      return res.json(informFamiliar);
    }
  }
  
  export const controllerFormulario = new ControllerFormulario();