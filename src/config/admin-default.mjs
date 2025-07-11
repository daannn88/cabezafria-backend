import { encryptedPassword } from "../helpers/bcrypt.helper.mjs";
import usersModel from "../schema/user.schema.mjs";
import adminUser from "./admin-data.mjs";



const createDefaultAdmins = async () => {
    
    try {
        // Crea roles por defecto
        const registeredUsers = await Promise.all(
            adminUser.map( async (userData) => {
                const userFound = await usersModel.findOne({ userEmail: userData.userEmail });

                if (!userFound) {
                    userData.userPassword = encryptedPassword( userData.userPassword );

                    const user = new usersModel( userData );
                    return user.save();
                }
                
                return null; // No guarda si el usuario ya existe
            })
        );

        // Filtra los valores nulos y muestra solo los usuarios que se han creado
        console.log("Usuarios creados:", registeredUsers.filter(Boolean));

    } catch (error) {
        console.error( error );
    }

}

export default createDefaultAdmins