import bcrypt from 'bcrypt';
import usersModel from "../schema/user.schema.mjs";
import { generateToken } from '../helpers/jwt.helper.mjs';

const loginUser = async (req, res)=>{
    const inputData = req.body;

    const userFound = await usersModel.findOne({
        userEmail: inputData.userEmail
    });
    
    if(! userFound){
        return res.status(404).json({msg: 'El usuario no existe, por favor registrese.'})
    }
    
    const isAuthenticated = bcrypt.compareSync(
        inputData.userPassword,
        userFound.userPassword
    )

    if(! isAuthenticated){
        return res.status(404).json({msg:'contraseña invalida.'})
    }

    const payload = {
        userName: userFound.userName,
        userEmail: userFound.userEmail,
<<<<<<< HEAD
        userRole: userFound.userRole,
=======
        userRole: userFound.userRole
>>>>>>> 4651d0c684ee54a2a83ad259524f8c2e7487a954
    };

    const token = generateToken(payload);

    
    const objUser = userFound.toObject();       //convirtiendo de BJSON A JS
    delete objUser.userPassword;
    delete objUser.createdAt;
    delete objUser.updatedAt;


    res.json({
        token,
        user: objUser
    })
}

const reNewToken = (req, res)=>{
    const payload = req.authUser

    const token = generateToken(payload)

    res.json({token});
} 

export{
    loginUser,
    reNewToken
}