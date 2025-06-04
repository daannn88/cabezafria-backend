import bcrypt from 'bcrypt';
import usersModel from "../schemas/user.schema.mjs";
import { generateToken } from '../helpers/jwt.helper.mjs';

const loginUser = async (req, res)=>{
    const inputData = req.body;

    const userFound = await usersModel.findOne({
        email: inputData.email
    });
    
    if(! userFound){
        return res.status(404).json({msg: 'El usario no existe, por favor registrese.'})
    }
    
    const isAuthenticated = bcrypt.compareSync(
        inputData.password,
        userFound.password
    )

    if(! isAuthenticated){
        return res.status(404).json({msg:'contrasenia invalida'})
    }

    const payload = {
        name: userFound.name,
        email: userFound.email,
        role: userFound.role
    };

    const token = generateToken(payload);

    
    const objUser = userFound.toObject();       //convirtiendo de BJSON A JS
    delete objUser.password;
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