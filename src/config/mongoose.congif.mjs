import mongoose from 'mongoose';

//Define una funcion asincrona para definir la configuracion del ODM Mongoose para usar MongoDB
async function dbConnect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/db-cabezafria', {});

        console.log('Connected!')
    }
    catch(error){
        console.error(error);
        console.log('Error al conectarse a la base de datos');
    }
    
    // mongoose.connect('mongodb://127.0.0.1:27017/test')
    // .then(() => {console.log('Connected!')})
    // .catch(() => {console.log('Error al conectarse a la base de datos');
    // })
};

export default dbConnect;