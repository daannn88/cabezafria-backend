//const express = require('express');             //commonJS
//Paso 1:Importamos dependecias
import express from 'express';                                  //Importamos dependencias ESModule
import product from './routes/product.route.mjs'                //Importamos las rutas
import dbConnect from './config/mongoose.congif.mjs';           //Importamos dependencias Mongoose

//Paso 2: Ejecutamos Express
const app = express();             //Invocación de express

dbConnect();

app.use(product);

//Paso 4: Lanzamos el servidor web usando express escuchando 
app.listen(3000, ()=>{
    console.log('Servidor lanzado exitosamente! :)')
});