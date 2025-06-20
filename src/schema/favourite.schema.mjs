import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
    favouriteUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    favouriteProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
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