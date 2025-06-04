import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    usuarioId: {
        type: String,
        required: false
    },
    productoId: {
        type: String,
        required: false
    },
    calificacion: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comentario: {
        type: String,
        maxlength: 1000
    },
    fecha: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true,
    versionkey: false
});

const reviewModel = mongoose.model(
    'reviews',      //nombre de la coleccion
    reviewSchema       //nombre de la estructura de datos
);

export default reviewModel;