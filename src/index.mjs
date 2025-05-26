//const express = require('express');             //commonJS
//Paso 1:Importamos dependecias
import express from 'express';                                  //Importamos dependencias ESModule
import product from './routes/products.route.mjs';
import dbConnect from './config/mongoose.congif.mjs';           //Importamos dependencias Mongoose

//Paso 2: Ejecutamos Express
const app = express();             //Invocación de express
app.use(express.json());

dbConnect();

app.use(product);                   //implementando las rutas de producto

//Paso 4: Lanzamos el servidor web usando express escuchando 
app.listen(3000, ()=>{
    console.log('Servidor lanzado exitosamente! :)')
});