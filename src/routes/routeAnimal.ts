import express, { Request, Response, NextFunction } from "express";
import { controllerAnimal } from "../controllers/usuarios/controllerAnimal";
import { tokenValidation } from "../lib/validateToken";

import multer from "../lib/multer";

const router = express.Router();

const dashboardPath = "dashboard";
const adoptantePath = "dashboard-adoptante";
const adoptamePath = "adoptame";
const eleccionAnimalPath = "seleccion-animal";
const getAnimalesPath = "mis-animales";
const gatoPath = "crear-animal-gato";
const perroPath = "crear-animal-perro";
const editarPath = "editar-animal";
const editarEstadoPath = "editar-estado-animal"
const editarEstadoIIPath = "editar-enAdopcion-animal"
const adopcionPath ="animal-adoptado";

router.post(
  `/${dashboardPath}/${eleccionAnimalPath}/${gatoPath}`,
  [multer.single("image"), tokenValidation],
  controllerAnimal.crearAnimalGato
);

router.post(
  `/${dashboardPath}/${eleccionAnimalPath}/${perroPath}`,
  [multer.single("image"), tokenValidation],
  controllerAnimal.crearAnimalPerro
);

router.get(
  `/${dashboardPath}/${getAnimalesPath}/:id`,
  controllerAnimal.populateAnimales
);

// router.get(
//   `/${dashboardPath}/${getAnimalesPath}`,
//   controllerAnimal.getAnimales
// );

router.get(`/${adoptantePath}/${adoptamePath}`, controllerAnimal.getAnimales);

router.get(
  `/${dashboardPath}/${getAnimalesPath}/:id`,
  controllerAnimal.getAnimal
);

router.get(`/${dashboardPath}/${editarPath}/:id`, controllerAnimal.getAnimal);

router.get(
  `/${dashboardPath}/${adopcionPath}`,
  controllerAnimal.getAnimalesAdoptados
);

router.put(
  `/${dashboardPath}/${editarPath}/:id`,
  [multer.single("image"), tokenValidation], //añadir ruta editar animales
  controllerAnimal.updateAnimal
);


router.put(
  `/${dashboardPath}/${editarEstadoPath}/:id`,
  controllerAnimal.updateAdopcionAnimal
);

router.put(
  `/${dashboardPath}/${editarEstadoIIPath}/:id`,
  controllerAnimal.updateEstadoAnimal
);


/*router.put(
  `/${dashboardPath}/${editarPath}/:id`,
  [multer.single("image"), tokenValidation], //añadir ruta editar animales
  controllerAnimal.updateAnimal
);*/

router.delete(
  `/${dashboardPath}/${getAnimalesPath}/:id`,
  controllerAnimal.deleteAnimal
);

module.exports = router;
