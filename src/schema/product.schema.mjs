//Mongoose: definir la estructura de datos de mi documento

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        trim: true,
        required: [true, 'El nombre del producto es requerido']     //Obligatorio
    },
    description:{
        type: String,
        trim: true
    },
    price:{
        type: Number,
        min: [0, 'El precio del producto debe ser mayor a cero'],
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
        type: mongoose.Schema.Types.ObjectId,
        default: 'non-category',
        ref: 'categories'
    },
    urlImage:{
        type: String,
    },
    state:{
        type: Boolean,
        default: true
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviews'
    }
    // owner:{
    //     //Vincular el ID al UserModels
    // }
},
//configuración de la estructura de datos
{
    timestamps: true,           //crea dos campos 'createdAt' y 'updatedAt'x
    versionkey: false
});

//define el modelo: Vincular el Models a una collection especifica
const productModel = mongoose.model(
    'products', 
    productSchema
);

export default productModel;