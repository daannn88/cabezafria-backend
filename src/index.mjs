//const express = require('express');             //commonJS
//Paso 1:Importamos dependecias
import express from 'express';                                  //Importamos dependencias ESModule  
import favourite from './routes/favourite.router.mjs'            //Importamos las rutas
import product from './routes/products.route.mjs';
import reviews from './routes/reviews.route.mjs'              //Importamos las rutas
import comments from './routes/comments.route.mjs'
import dbConnect from './config/mongoose.congif.mjs';           //Importamos dependencias Mongoose

//Paso 2: Ejecutamos Express
const app = express();             //Invocación de express

app.use(express.json());
app.use(product);                   //implementando las rutas de producto
app.use(reviews);
app.use(comments);
app.use( favourite);

dbConnect();




//Paso 4: Lanzamos el servidor web usando express escuchando 
app.listen(3000, ()=>{
    console.log('Servidor lanzado exitosamente! :)')
});