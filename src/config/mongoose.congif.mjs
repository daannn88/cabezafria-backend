import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI ?? 'mongodb://127.0.0.1:27017/db-cabezafria';

//Define una funcion asincrona para definir la configuracion del ODM Mongoose para usar MongoDB
async function dbConnect(){
    try{
        await mongoose.connect(DB_URI, {});

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