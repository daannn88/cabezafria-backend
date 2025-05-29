import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
    usuarioId: {
        type: String,
        ref: 'Usuario',
        required: false,
    },
    productoId: {
        type: String,
        ref: 'Producto',
        required: false,
    },
    agregadoEn: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true,
    versionKey: false
});

const favouriteModel = mongoose.model(
    'favourite',
    favouriteSchema
);

export default favouriteModel;