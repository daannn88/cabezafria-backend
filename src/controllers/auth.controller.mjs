import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usersModel from "../schemas/user.schema.mjs";

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

    const jwtSecret = 'hady8adha76da8hf7'

    const token = jwt.sign(
        payload, 
        jwtSecret,
        {expiresIn: '1h'}
    );

    const objUser = userFound.toObject();       //convirtiendo de BJSON A JS
    delete objUser.password;
    delete objUser.createdAt;
    delete objUser.updatedAt;


    res.json({
        token,
        user: objUser
    })
}

export{
    loginUser
}