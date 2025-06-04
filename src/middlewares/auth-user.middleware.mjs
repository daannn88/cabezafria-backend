import jwt from 'jsonwebtoken';

const authUser = (req, res, next)=>{
    const token = req.header('X-Token')

    if(! token){
        return res.json({msg : 'Error: No se pudo obtener el token'})
    }
    const jwtSecret = 'hady8adha76da8hf7'

    const payload = jwt.verify(token, jwtSecret);
    

    delete payload.iat;
    delete payload.exp;

    console.log (req)

    req.authUser= payload

    next(); 
}

export{
    authUser
}