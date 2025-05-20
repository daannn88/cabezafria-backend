//File routes: Definir los endopoints de una entidad

import {Router} from "express";     //Importando el Router de Express
const router = Router();            //Invocando Router (Preparandolo para definir rutas)

//Define las rutas de acceso
router.get('/api/products', (req, res)=>{
    res.send('obtiene todos los productos');
});

router.post('/api/products', (req, res)=>{
    res.send('se crea un producto');
});

router.patch('/api/products', (req, res)=>{
    res.send('Actualización parcial de un producto');
});

router.put('/api/products', (req, res)=>{
    res.send('Actualización completa de un producto');
});

router.delete('/api/products', (req, res)=>{
    res.send('Elimina un producto')
});

export default router;              //Exportando todas las rutas de esta entidad para ser usada en cualquier parte de la aplicación