import mongoose from "mongoose"; 

const usersSchema = new mongoose.Schema({ 
    userName: {
        type: String,
        trim: true,
        required: [ true, 'El nombre del usuario es obligatorio' ]    //obligatorio
    },
    userEmail: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [ true, 'El correo del usuario es obligatorio' ],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, introduce un correo electrónico válido.']
    },
    userPassword: {
        type: String,
        trim: true,
        minlength: [8,' La contraseña debe tener al menos 8 caracteres'],
        required: [ true, 'La contraseña es obligatoria' ]
    },
    userRole: {
        type: String,
        required: [true, 'El rol del usuario es obligatorio.'],
        enum:{
            values: [ 'Administrador', 'Cliente'],
            message: 'El rol {VALUE} no es válido. Los roles permitidos son: Administrador o Cliente.'
        },
        default: 'Cliente' // Cambiado a 'registrado' para mayor coherencia con los roles definidos
    },
    userPhoneNumber: {
        type: Number,
        // match: [/^\d{10}$/,'El numero debe tener 10 dígitos '],
        required: [ true, 'El numero es obligatorio' ]
    }

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