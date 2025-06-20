
import mongoose from 'mongoose';

// Define el Schema (Estructura de archivos)
const categorySchema = new mongoose.Schema(
    // Define la estructura de datos del documento
    {
        categoryName: {
            type: String,
            trim: true,
            unique: true,
            required: [ true, 'El nombre de la categoria es requerido' ]
        },
        categoryDescription: {
            type: String,
            trim: true
        },
        categoryState: {
            type: Boolean,
            default: true
        },
        categoryOwner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
    },
    // Configuracion de la estructura de datos
    {
        timestamps: true,       // Agrega las propiedades createdAt, updatedAt (Fechas de Creacion y Actualizacion del documento)
        versionKey: false       // Eliminar la propiedad __v (Contador de modificaciones del Schema)
    });

// Define el Modelo: Vincular el Schema a una collection especifica
const categoryModel = mongoose.model( 
    'categories',                 // Nombre de la collection a la que lo voy a asociar
    categorySchema               // La estructura de datos a la que lo vamos a vincular
);


// Exponemos el Modelo para ser usado por cualquier otro archivo en mi aplicacion
export default categoryModel;
