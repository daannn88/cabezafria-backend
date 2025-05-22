//File routes: Definir los endopoints de una entidad

import {Router} from "express";     //Importando el Router de Express
import { createusers } from "../controllers/user-controllers.mjs";

const router = Router();            //Invocando Router (Preparandolo para definir rutas)

//Define las rutas de acceso

router.post('/api/users', createusers );



export default router;              //Exportando todas las rutas de esta entidad para ser usada en cualquier parte de la aplicación