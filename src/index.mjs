//const express = require('express');             //commonJS
//Paso 1:Importamos dependecias

//Importamos las rutas
import express from 'express';                                  //Importamos dependencias ESModule  
import cors from 'cors'

import favourite from './routes/favourite.route.mjs'           //Importamos las rutas
import product from './routes/products.route.mjs';              //Importamos las rutas
import reviews from './routes/reviews.route.mjs'                //Importamos las rutas
import comments from './routes/comments.route.mjs'              //Importamos las rutas
import users from './routes/user.routes.mjs'                    //Importamos las rutas
import auth from './routes/auth.route.mjs'                      //Importamos las rutas
import category from './routes/category.route.mjs'
import dbConnect from './config/mongoose.congif.mjs';           //Importamos dependencias Mongoose
import createDefaultAdmins from './config/admin-default.mjs';
import tests from './routes/testing-backend.mjs'


//Paso 2: Ejecutamos Express

const app = express();             //Invocación de express
const PORT = process.env.PORT ?? 3001;

app.use(cors())
app.use(express.json());

app.use(product);                   //implementando las rutas de producto
app.use(reviews);
app.use(comments);
app.use(favourite);
app.use(users);
app.use(auth);
app.use(category)
app.use(tests);

dbConnect();
createDefaultAdmins();

//Paso 4: Lanzamos el servidor web usando express escuchando 
app.listen(PORT, ()=>{
    console.log(`Servidor lanzado exitosamente! :) ,${ PORT }`);
});