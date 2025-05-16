// const express = require('express');             //commonJS
import express from 'express';

const app = express();              //Invocación de express

app.listen(3000, ()=>{
    console.log('Servidor lanzado exitosamente! :)')
});