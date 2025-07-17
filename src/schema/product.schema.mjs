//Mongoose: definir la estructura de datos de mi documento

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        trim: true,
        required: [true, 'El nombre del producto es requerido']     //Obligatorio
    },
    productDescription:{
        type: String,
        trim: true
    },
    productPrice:{
        type: Number,
        min: [0, 'El precio del producto debe ser mayor a cero'],
        default: 0,
        trim: true
    },
    productType:{  
        type: String,
        trim: true,
        required: true
    },
    productSize:{  
        type: String,
        trim: true
    },
    productColor:{
        type: String,
        trim: true,
        required:true
    },
    productStock:{
        type: Number,
        min: [1, 'El stock minimo para registrar es 1'],
        default: 1,
        trim: true
    },
    productCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    productUrlImage:{
        type: String,
    },
    productState:{
        type: Boolean,
        default: true
    },
    productReviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviews'
    },
    productOwner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
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