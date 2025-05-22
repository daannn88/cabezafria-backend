//Mongoose: definir la estructura de datos de mi documento

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'El nombre del producto es requerido']
    },
    description:{
        type: String,
        trim: true
    },
    price:{
        type: Number,
        min: [0, 'El precio del producto debe srr mayor a cero'],
        default: 0,
        trim: true
    },
    size:{
        type: String,
        trim: true,
        required: true
    },
    color:{
        type: String
    },
    stock:{
        type: Number,
        min: [1, 'El stock minimo para registrar es 1'],
        default: 1,
        trim: true
    },
    category:{
        //Vincular el ID al CategoryModels
        type: String,
        default: 'non-category'
    },
    urlImage:{
        type: String,
    },
    state:{
        type: Boolean,
        default: true
    },
    // owner:{
    //     //Vincular el ID al UserModels
    // }
},
//configuración de la estructura de datos
{
    timestamps: true,
    versionkey: false
});

//define el modelo: Vincular el Models a una collection especifica
const productModel = mongoose.model(
    'products', 
    productSchema
);

export default productModel;