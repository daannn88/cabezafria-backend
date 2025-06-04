import mongoose from "mongoose"; 

const usersSchema = new mongoose.Schema({ 
    name: {
        type: String,
        trim: true,
        required: [ true, 'El nombre del usuario es obligatorio' ]    //obligatorio
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [ true, 'El correo del usuario es obligatorio' ],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, introduce un correo electrónico válido.']
    },
    //username, puede ser: un correo, # identificacion, alias */
    username: {
        type: String,
        required: [ true, 'El correo del usuario es obligatorio' ],
        
    },
    password: {
        type: String,
        trim: true,
        min: [8,' La contraseña debe tener al menos 8 caracteres'],
        max: [20,' La contraseña debe tener máximo 20 caracteres'],
        required: [ true, 'La contraseña es obligatoria' ]
    },
    role: {
        type: String,
        default: 'cliente'
    },
    phoneNumber: {
        type: Number,
        match: [/^\d{10}$/,'El numero debe tener 10 dígitos '],
        default: 'Introduce el numero '
    },

}, {
    timestamps: true, // Agrega las propiedades createdAt
    versionKey: false // contador __v de modificaciones del schema
});



//define el modelo: vincular el schema a una collertion especifica
const usersModel = mongoose.model(
    'users', 
    usersSchema 
);


export default usersModel;