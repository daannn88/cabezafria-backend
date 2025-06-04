import { verifyToken } from '../helpers/jwt.helper.mjs';

const authUser = (req, res, next)=>{
    const token = req.header('X-Token')

    if(! token){
        return res.json({msg : 'Error: No se pudo obtener el token'})
    }
    const jwtSecret = 'hady8adha76da8hf7'

    const payload = verifyToken(token)
    

    delete payload.iat;
    delete payload.exp;

    console.log (req)

    req.authUser= payload

    next(); 
}

export{
    authUser
}