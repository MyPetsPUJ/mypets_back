import { Request, Response, NextFunction } from "express";
import SolicitudAdopcion from "../models/solicitud-adopcion/modelSolicitudAdopcion"; 
import Adoptante from "../models/usuarios/modelAdoptante";
import Animal from "../models/usuarios/modelAnimal";
import Fundacion from "../models/usuarios/modelFundacion";
var mongoose = require('mongoose');

class ControllerSolicitudAdopcion{
  public async crearSolicitud( req: Request, res: Response, next: NextFunction){
    console.log("Creando solicitud");
    const solicitud = new SolicitudAdopcion({
      idAdoptante :req.body.adoptante._id,
      idFundacion : mongoose.Types.ObjectId(req.body.idFundacion),
      idAnimal : req.body.animal._id,
      //idFormulario :  mongoose.Types.ObjectId(req.body.idFormulario), 
      idFormulario: null,
      fecha_solicitud: req.body.fecha,
      estado : req.body.estado
    });

    console.log(solicitud);

    solicitud
      .save()
      .then((result: any) => {
        res.status(201).json({
          message: "Solicitud creada",
          result: result,
        });
      })
      .catch((err: any) => {
        res.status(500).json({
          error: err,
        });
      });
    
    const idUser = solicitud.idAdoptante;
    const idFunda = solicitud.idFundacion;

    const adoptanteUpdate = await Adoptante.findByIdAndUpdate(
      idUser,
      { $push: { solicitudesAdoptante: solicitud._id } },
      { new: true, useFindAndModify: false }
    );

    console.log("Adoptante actualizada correctamente", adoptanteUpdate);

    const fundacionUpdate = await Fundacion.findByIdAndUpdate(
      idFunda,
      { $push: { solicitudesFundacion: solicitud._id } },
      { new: true, useFindAndModify: false }
    );
    
    console.log("Fundacion actualizada correctamente", fundacionUpdate);

  }

  public async getSolicitudes( req: Request, res: Response): Promise<Response> {
    const solicitudes = await SolicitudAdopcion.find();
    return res.json(solicitudes);
  }

  public async getSolicitud( req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const solicitud = await SolicitudAdopcion.findById(id);
    return res.json(solicitud);
  }

  public async getSolicitudesAdoptante( req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    var solicitudes: any[] = [];

    try{
      const adoptante = await Adoptante.findById(id);

      if( adoptante!.solicitudesAdoptante !== undefined )
      {
        for(var solicitud of adoptante!.solicitudesAdoptante)
        {
          var nSolicitud = await SolicitudAdopcion.findById(solicitud); 
          solicitudes.push(nSolicitud);
        } 
      }
    }
    catch (error) {
      console.error(error);
    }
    finally{
      return res.json(solicitudes);
    }
  }

  public async getSolicitudesFundacion( req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    var solicitudes: any[] = [];

    try{
      const fundacion = await Fundacion.findById(id);

      if( fundacion!.solicitudesFundacion !== undefined )
      {
        for(var solicitud of fundacion!.solicitudesFundacion)
        {
          var nSolicitud = await SolicitudAdopcion.findById(solicitud); 
          solicitudes.push(nSolicitud);
        } 
      }
    }
    catch (error) {
      console.error(error);
    }
    finally{
      return res.json(solicitudes);
    }
  }

  public async populateSolicitudesFundacion( req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    var solicitudes: any[] = [];
    var adoptantes: any[] =[];
    var animales: any[] =[];

    const fundacion = await Fundacion.findById(id);

    if( fundacion!.solicitudesFundacion !== undefined )
    {
      for(var solicitud of fundacion!.solicitudesFundacion)
      {
        var nSolicitud = await SolicitudAdopcion.findById(solicitud).populate("idAnimal");

        var mSolicitud = await SolicitudAdopcion.findById(solicitud).populate("idAdoptante");  
        solicitudes.push(nSolicitud);

        var adoptante = mSolicitud!.idAdoptante;
        adoptantes.push(adoptante);

        var animal = nSolicitud!.idAnimal;
        animales.push(animal);

    //return res.json({ resultado, publis });
      } 
    }

    return res.json({ fundacion,solicitudes,adoptantes,animales});
  }

  public async deleteSolicitud(req: Request, res: Response): Promise<Response>{
    
    const id = req.params.id;
    const solicitud = await SolicitudAdopcion.findById(id);
    const adoptante = await Adoptante.findById(solicitud?.idAdoptante);
    const fundacion = await Fundacion.findById(solicitud?.idFundacion);



    const animal = await Animal.findByIdAndRemove(id);


    return res.json({
      message: "Animal eliminado satisfactoriamente",
      animal})
  }
};

export const controllerSolicitudAdopcion= new ControllerSolicitudAdopcion()


