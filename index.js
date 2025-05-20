// const express = require('express');             //commonJS
//Paso 1:Importamos dependecias
import express from 'express';                      //ESModule

//Paso 2: Ejecutamos Express
const app = express();              //Invocación de express

//Paso 3: Crear los EndPoints (Puntos de entrada)
app.get('/', (req, res)=>{
    res.send('<h1>Home</h1>')
});

app.get('/about-us', (req, res)=>{
    res.send('<h1>About us</h1>')
});

//Paso 4: Lanzamos el servidor web usando express escuchando 
app.listen(3000, ()=>{
    console.log('Servidor lanzado exitosamentee! :)')
});