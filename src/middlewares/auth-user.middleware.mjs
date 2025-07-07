import { verifyToken } from '../helpers/jwt.helper.mjs';

const authUser = (req, res, next)=>{
    const token = req.header('X-Token')
    console.log('s: ', token)

    if(!token){
        return res.json({msg : 'Error: No se pudo obtener el token'})
    }
    

    const payload = verifyToken(token);
    

    delete payload.iat;
    delete payload.exp;

    console.log (req)

    req.authUser= payload

    next(); 
}

export{
    authUser
}