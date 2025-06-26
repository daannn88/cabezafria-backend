import bcrypt from 'bcrypt';

import usersModel from "../schema/user.schema.mjs";

const createUsers = async ( req, res ) => {
    const inputData = req.body; // extraigo el objeto enviado
    
    try{ 
        const userFound =  await usersModel.findOne({
            username: inputData.username,
            email: inputData.email
        });

        if(userFound){
        return res.status(404).json({msg: 'No pudo registrarse, porque el usuario ya existe'})
        };

        const salt = bcrypt.genSaltSync();
    
        console.log('salt: ', salt);

        const hashPassword = bcrypt.hashSync(
            inputData.password,
            salt
        );

        console.log('hashPassword: ', hashPassword);

        inputData.password = hashPassword; 
    
        const data = await usersModel.create(inputData);
        res.status(201).json(data)
    }
    catch(error){
        console.error(error);
        res.status( 500 ).json({msg: 'Error: No se pudo registrar el usuario'} );
    }
}

const getAllUsers =  async ( req, res ) => {

    try {
        const data = await usersModel.find({});
    res.json (data) ;
    }
    catch  ( error ) {
        console.error( error );
        res.json({ msg: 'Error: No se pudo obtener los datos del usuario '})

    }
}

const getUsersById =  async (req, res ) => {
    const UsersId = req.params.id;
    try {
        const data = await usersModel.findById( UsersId );
        if ( ! data ){
            return res.json({ msg: 'El usuario no se encuentra registrado '})
        }
        res.json( data );
    }
    catch ( error ) {
        console.error( error );
        res.json({ msg: 'Error: No se pudo encontrar el usuario '})

    }
}

const removeUsersById =  async ( req, res) => {
    const UsersId = req.params.id;
    try {
        const data = await usersModel.findById( UsersId );
        if ( ! data ){
                return res.json({ msg: 'El usuario no se encuentra registrado '})
            }
        res.json( data )
    }
    catch ( error ) {
        console.error( error );
        res.json({ msg: 'Error: No se pudo eliminar un usuario'})
    }
}

const updateUsersById =  async ( req, res) => {
    const inpudtData = req.body;
    const UsersId = req.params.id;
    try {
        const data = await usersModel.findByIdAndUpdate( UsersId, inpudtData );
        
        res.json( data )
    }
    catch ( error ) {
        console.error( error );
        res.json({ msg: 'Error: No se pudo actualizar el usuario'});

    }

}

//exponer las funcionalidades para ser usadas por otros archivos 
export {
    createUsers,
    getAllUsers,
    getUsersById,
    removeUsersById,
    updateUsersById
}