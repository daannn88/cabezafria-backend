import mongoose from "mongoose";

//define la estructura de datos del documento
const commentsSchema = new mongoose.Schema({
    commentUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    commentUserName:{
        type: String,
    },
    commentUserEmail:{
        type: String,
    },
    content: {
        type: String,
        maxlength: 1000
    },
}, {
    timestamps: true,
    versionKey: false
});

//define el modelo y vinculala estructura de datos a una coleccion
const commentsModel = mongoose.model(
    'comment',  //nombre de la coleccion
    commentsSchema  //nombre de la estructua de datos
);


//exponemos el modelo para que sea usado por cualqeuir archivo de la aplicacion
export default commentsModel;