import mongoose from "mongoose"; 

const usersSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: [ true, 'El nombre del usuario es obligatorio' ]
    },
    
    //username, puede ser: un correo, # identificacion, alias */
    username: {
        type: String,
        required: [ true, 'El correo del usuario es obligatorio' ],
        unique: [ true, 'El correo ya esta registrado. Solo puede registrarse con un unico correo' ]
    },
    password: {
        type: String,
        required: [ true, 'La contraseña es obligatoria' ]
    },
    role: {
        type: String,
        default: 'registered'
    }
}, {
    timestamps: true, // Agrega las propiedades createdAt
    versionKey: false // contador __v de modificaciones del schema
});



//define el modelo: vincular el schema a una collertion especifica
const usersModel = mongoose.model('users', usersSchema );


export default usersModel;