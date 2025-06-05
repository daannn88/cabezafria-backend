import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    productoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
    },
    calificacion: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String,
        maxlength: 1000
    },
},{
    timestamps: true,
    versionkey: false
});

const reviewModel = mongoose.model(
    'reviews',      //nombre de la coleccion
    reviewSchema       //nombre de la estructura de datos
);

export default reviewModel;