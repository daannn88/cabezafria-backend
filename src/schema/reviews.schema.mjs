import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    reviewUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    reviewProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
    },
    reviewQualification: {
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